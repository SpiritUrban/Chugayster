import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlQueriesComponent } from './url-queries.component';

describe('UrlQueriesComponent', () => {
  let component: UrlQueriesComponent;
  let fixture: ComponentFixture<UrlQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
