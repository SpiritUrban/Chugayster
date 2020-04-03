import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var window: any;
@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ArComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    const constraints = window.constraints = {
      audio: false,
      video: true
    };
    
    function handleSuccess(stream) {
      const video = document.querySelector('video');
      const videoTracks = stream.getVideoTracks();
      console.log('Got stream with constraints:', constraints);
      console.log(`Using video device: ${videoTracks[0].label}`);
      window.stream = stream; // make variable available to browser console
      video.srcObject = stream;
    }
    
    function handleError(error) {
      if (error.name === 'ConstraintNotSatisfiedError') {
        const v: any = constraints.video;
        errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`,1);
      } else if (error.name === 'PermissionDeniedError') {
        errorMsg('Permissions have not been granted to use your camera and ' +
          'microphone, you need to allow the page access to your devices in ' +
          'order for the demo to work.',1);
      }
      errorMsg(`getUserMedia error: ${error.name}`, error);
    }
    
    function errorMsg(msg, error) {
      const errorElement = document.querySelector('#errorMsg');
      errorElement.innerHTML += `<p>${msg}</p>`;
      if (typeof error !== 'undefined') {
        console.error(error);
      }
    }
    
    async function init(e) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
        e.target.disabled = true;
      } catch (e) {
        handleError(e);
      }
    }
    
    document.querySelector('#showVideo').addEventListener('click', e => init(e));
  }

}
