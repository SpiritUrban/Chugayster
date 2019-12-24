import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

// import {Country} from './country';
// import {members} from './members';

import {Member} from './member';
import {MEMBERS} from './members';

import { DecimalPipe } from '@angular/common';

import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortDirection} from './sortable.directive';

interface SearchResult {
  members: Member[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(members: Member[], column: string, direction: string): Member[] {
  if (direction === '') {
    return members;
  } else {
    return [...members].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(member: Member, term: string, pipe: PipeTransform) {
  return member.name.toLowerCase().includes(term.toLowerCase())
    || pipe.transform(member.carma).includes(term)
    || pipe.transform(member.level).includes(term);
}

@Injectable({providedIn: 'root'})
export class MemberService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _members$ = new BehaviorSubject<Member[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(
      private pipe: DecimalPipe
      ) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._members$.next(result.members);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get members$() { return this._members$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: string) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let members = sort(MEMBERS, sortColumn, sortDirection);

    // 2. filter
    members = members.filter(member => matches(member, searchTerm, this.pipe));
    const total = members.length;

    // 3. paginate
    members = members.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({members, total});
  }
}