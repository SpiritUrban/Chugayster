import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipCardVideoComponent } from './flip-card-video.component';

describe('FlipCardVideoComponent', () => {
  let component: FlipCardVideoComponent;
  let fixture: ComponentFixture<FlipCardVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipCardVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipCardVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
