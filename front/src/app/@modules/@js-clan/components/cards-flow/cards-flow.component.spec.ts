import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFlowComponent } from './cards-flow.component';

describe('CardsFlowComponent', () => {
  let component: CardsFlowComponent;
  let fixture: ComponentFixture<CardsFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
