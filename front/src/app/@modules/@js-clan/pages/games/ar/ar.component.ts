import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../../../@common-dependencies/services/api.service';
import { log } from 'src/app/my_modules/stuff';
import appState from '../../../../../app-state';

declare var window: any;
@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ArComponent implements OnInit {

  fireFlow: any; // setInterval // fire loop

  constructor() { }

  ngOnInit(): void {

    // 40
    setInterval(() => {
      this.aimMove()
    }, 100)


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
        errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`, 1);
      } else if (error.name === 'PermissionDeniedError') {
        errorMsg('Permissions have not been granted to use your camera and ' +
          'microphone, you need to allow the page access to your devices in ' +
          'order for the demo to work.', 1);
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

    this.x()
  }

  x() {

    // Add boxe when spacebar is pressed.
    document.addEventListener('keyup', (e) => {
      if (e.keyCode !== 32) return;
      this.fire()

    });
  }

  info(info) {
    alert(info)
  }

  fire() {
    var sceneEl = document.querySelector('a-scene');
    var markerEl: any = document.querySelector('#marker');

    var newEl = document.createElement('a-box');
    newEl.setAttribute('color', 'red');
    sceneEl.appendChild(newEl);
    var position = markerEl.object3D.getWorldPosition();
    position.y = 0.5;
    newEl.setAttribute('position', position);
  }

  fireStart() {
    log('firestart')
    this.fireFlow = setInterval(() => {
      this.fire()
    }, 500)
  }

  fireEnd() {
    clearInterval(this.fireFlow)
  }

  aimMove() {
    var markerEl: any = document.querySelector('#marker');

    const all = document.querySelectorAll('a-box');
    // log(
    //   all[1 ].getAttribute('position')
    // )
    all.forEach((x)=>{
      const ownPosition: any = x.getAttribute('position');
      var position = markerEl.object3D.getWorldPosition();
      // position.x = 0.5;
      // ownPosition.y = position.y
      // log(ownPosition.y += Math.random()*2-1)
      ownPosition.y += Math.random()-0.1
      ownPosition.x += Math.random()-0.1
      ownPosition.z += Math.random()-0.1

      x.setAttribute('position',ownPosition);

      //200
      const toFar = Math.max(
        Math.abs(ownPosition.y),
        Math.abs(ownPosition.x),
        Math.abs(ownPosition.z)
      )
      log(ownPosition, toFar)
      if (toFar > 200) x.parentNode.removeChild(x);
    })
  }


}
