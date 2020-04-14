import { Component, OnInit } from '@angular/core';
declare var window: any;
import { log } from 'src/app/my_modules/stuff';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.sass']
})
export class CameraComponent implements OnInit {

  constraints = window.constraints = {
    audio: false,
    video: true
  };

  constructor() { }

  ngOnInit(): void {
    log('init camera')
    this.startCamera()
  }

    //
  // sctivate of camera
  //
  async startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      this.handleSuccess(stream);
    } catch (error) {
      console.error(error);
    }
  }

    // for camera
    handleSuccess(stream) {
      const video = document.querySelector('video');
      const videoTracks = stream.getVideoTracks();
      console.log('Got stream with constraints:', this.constraints);
      console.log(`Using video device: ${videoTracks[0].label}`);
      window.stream = stream; // make variable available to browser console
      video.srcObject = stream;
    }
  
    // for camera
    handleError(error) {
      if (error.name === 'ConstraintNotSatisfiedError') {
        const v: any = this.constraints.video;
        log(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`, 1);
      } else if (error.name === 'PermissionDeniedError') {
        log('Permissions have not been granted to use your camera and ' +
          'microphone, you need to allow the page access to your devices in ' +
          'order for the demo to work.', 1);
      }
      log(`getUserMedia error: ${error.name}`, error);
    }
}
