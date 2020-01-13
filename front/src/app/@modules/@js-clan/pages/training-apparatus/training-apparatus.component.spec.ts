import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingApparatusComponent } from './training-apparatus.component';

describe('TrainingApparatusComponent', () => {
  let component: TrainingApparatusComponent;
  let fixture: ComponentFixture<TrainingApparatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingApparatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingApparatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
