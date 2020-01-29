import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSamplesComponent } from './video-samples.component';

describe('VideoSamplesComponent', () => {
  let component: VideoSamplesComponent;
  let fixture: ComponentFixture<VideoSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
