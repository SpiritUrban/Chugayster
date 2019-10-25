import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCodeComponent } from './show-code.component';

describe('ShowCodeComponent', () => {
  let component: ShowCodeComponent;
  let fixture: ComponentFixture<ShowCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
