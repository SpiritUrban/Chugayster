import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightSkyComponent } from './night-sky.component';

describe('NightSkyComponent', () => {
  let component: NightSkyComponent;
  let fixture: ComponentFixture<NightSkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightSkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightSkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
