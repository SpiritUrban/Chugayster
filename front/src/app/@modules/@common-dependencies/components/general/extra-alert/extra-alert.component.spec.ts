import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraAlertComponent } from './extra-alert.component';

describe('ExtraAlertComponent', () => {
  let component: ExtraAlertComponent;
  let fixture: ComponentFixture<ExtraAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
