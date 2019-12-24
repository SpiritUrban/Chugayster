import { Component, OnInit } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import {Member} from './member';
import { MemberService } from './member.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass'],
  providers: [MemberService, DecimalPipe]
})


export class MembersComponent implements OnInit {

  members$: Observable<Member[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public service: MemberService
    ) {
    this.members$ = service.members$;
    this.total$ = service.total$;
  }

  ngOnInit() {
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }


}
