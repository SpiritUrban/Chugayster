import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonUniversityComponent } from './lesson-university.component';

describe('LessonUniversityComponent', () => {
  let component: LessonUniversityComponent;
  let fixture: ComponentFixture<LessonUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
