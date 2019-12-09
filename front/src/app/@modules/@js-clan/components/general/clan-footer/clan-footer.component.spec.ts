import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanFooterComponent } from './clan-footer.component';

describe('ClanFooterComponent', () => {
  let component: ClanFooterComponent;
  let fixture: ComponentFixture<ClanFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
