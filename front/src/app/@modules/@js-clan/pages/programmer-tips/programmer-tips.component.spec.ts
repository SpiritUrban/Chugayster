import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammerTipsComponent } from './programmer-tips.component';

describe('ProgrammerTipsComponent', () => {
  let component: ProgrammerTipsComponent;
  let fixture: ComponentFixture<ProgrammerTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammerTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammerTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
