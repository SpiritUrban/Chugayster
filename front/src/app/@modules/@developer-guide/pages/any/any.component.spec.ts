import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyComponent } from './any.component';

describe('AnyComponent', () => {
  let component: AnyComponent;
  let fixture: ComponentFixture<AnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
