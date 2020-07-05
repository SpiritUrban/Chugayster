import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanCommunicationsComponent } from './clan-communications.component';

describe('ClanCommunicationsComponent', () => {
  let component: ClanCommunicationsComponent;
  let fixture: ComponentFixture<ClanCommunicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanCommunicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanCommunicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
