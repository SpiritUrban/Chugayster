import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P404Component } from './p404.component';

describe('P404Component', () => {
  let component: P404Component;
  let fixture: ComponentFixture<P404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
