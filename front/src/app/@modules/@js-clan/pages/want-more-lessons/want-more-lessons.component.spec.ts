import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WantMoreLessonsComponent } from './want-more-lessons.component';

describe('WantMoreLessonsComponent', () => {
  let component: WantMoreLessonsComponent;
  let fixture: ComponentFixture<WantMoreLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WantMoreLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WantMoreLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
