import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeSoundsComponent } from './free-sounds.component';

describe('FreeSoundsComponent', () => {
  let component: FreeSoundsComponent;
  let fixture: ComponentFixture<FreeSoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeSoundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeSoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
