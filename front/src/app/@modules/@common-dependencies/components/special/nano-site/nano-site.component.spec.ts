import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoSiteComponent } from './nano-site.component';

describe('NanoSiteComponent', () => {
  let component: NanoSiteComponent;
  let fixture: ComponentFixture<NanoSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanoSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanoSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
