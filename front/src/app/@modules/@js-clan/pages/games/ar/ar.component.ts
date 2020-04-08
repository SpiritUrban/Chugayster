import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../../../@common-dependencies/services/api.service';
import { log } from 'src/app/my_modules/stuff';
import appState from '../../../../../app-state';
declare let AFRAME: any;

declare var window: any;
@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ArComponent implements OnInit {

  fireFlow: any; // setInterval // fire loop
  
  constraints = window.constraints = {
    audio: false,
    video: true
  };

  constructor() { }
  
  ngOnInit(): void {
    // 40
    setInterval(() => this.aimMove(), 100);

    document.querySelector('#showVideo').addEventListener('click', e => this.init(e));
    document.querySelector('a-scene').addEventListener('loaded', _ => this.aFrameOnInit());
  }

  sceneEl = () => document.querySelector('a-scene');


  x() {
    // Add boxe when spacebar is pressed.
    document.addEventListener('keyup', (e) => {
      if (e.keyCode !== 32) return;
      this.spawn('enemy');
    });
  }

  info(info) {
    alert(info)
  }

  aFrameOnInit(){
    log('aFrameOnInit', this);
    alert('LOADED');
    this.x();
    setInterval(() => this.spawn('enemy'), 15000);
    this.spawn('enemy');
    this.spawn('enemy');
  }

  async init(e) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      this.handleSuccess(stream);
      e.target.disabled = true;
    } catch (e) {
      this.handleError(e);
    }
  }

  handleSuccess(stream) {
    const video = document.querySelector('video');
    const videoTracks = stream.getVideoTracks();
    console.log('Got stream with constraints:', this.constraints);
    console.log(`Using video device: ${videoTracks[0].label}`);
    window.stream = stream; // make variable available to browser console
    video.srcObject = stream;
  }

  handleError(error) {
    if (error.name === 'ConstraintNotSatisfiedError') {
      const v: any = this.constraints.video;
      this.errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`, 1);
    } else if (error.name === 'PermissionDeniedError') {
      this.errorMsg('Permissions have not been granted to use your camera and ' +
        'microphone, you need to allow the page access to your devices in ' +
        'order for the demo to work.', 1);
    }
    this.errorMsg(`getUserMedia error: ${error.name}`, error);
  }

  errorMsg(msg, error) {
    const errorElement = document.querySelector('#errorMsg');
    errorElement.innerHTML += `<p>${msg}</p>`;
    if (typeof error !== 'undefined') {
      console.error(error);
    }
  }


  

  spawn(type) {
    const marker: any = document.querySelector('#marker')
    const position = marker.object3D.getWorldPosition()
    // enemy
    var newEl = document.createElement('a-entity');
    newEl.setAttribute('class', type);
    newEl.setAttribute('position', '-10 0.5 -20');
    newEl.setAttribute('scale', '40 40 40');
    newEl.setAttribute('gltf-model', 'url(assets/js-clan/3d/biotronican_crab_head_c1/scene.gltf)');

    this.sceneEl().appendChild(newEl);
    // var position = this.getMarkerPosition()
    log(position)
    position.y = '0.5';
    newEl.setAttribute('position', position);
  }

  fireStart() {
    log('firestart')
    this.fireFlow = setInterval(() => {
      this.spawn('enemy');
    }, 500)
  }

  fireEnd() {
    clearInterval(this.fireFlow)
  }

  aimMove() {
    const all = document.querySelectorAll('.enemy');
    // log(
    //   all[1 ].getAttribute('position')
    // )
    all.forEach((x) => {
      const ownPosition: any = x.getAttribute('position');
      var position = this.getMarkerPosition()
      // position.x = 0.5;
      // ownPosition.y = position.y
      // log(ownPosition.y += Math.random()*2-1)
      ownPosition.y += Math.random() - 0.4
      ownPosition.x += Math.random() - 0.1
      ownPosition.z += Math.random() - 0.1

      x.setAttribute('position', ownPosition);

      //200
      const toFar = Math.max(
        Math.abs(ownPosition.y),
        Math.abs(ownPosition.x),
        Math.abs(ownPosition.z)
      )
      // log(ownPosition, toFar)
      if (toFar > 100) this.toBegin(x) //this.remove(x) //x.parentNode.removeChild(x);
    })
  }

  remove(x: any) {
    // AFRAME.registerComponent('light', {
    //   // ...
    //   remove:  () =>  {
    //     x.removeObject3D('light');
    //   }
    //   // ...
    // });

    x.parentNode.removeChild(x);
    x = null; //delete x;
  }

  toBegin(x) {
    x.setAttribute('position', this.getStartPosition()); 
  }

  getPosition(x) {

  }
  setPosition(x) {

  }


  getMarker: any = () => document.querySelector('#marker');

  getMarkerPosition() {
    // return (this.getMarker) ? this.getMarker.object3D.getWorldPosition() : {x:0, y:0, z:0}
    return { x: '0', y: '0', z: '-100' }

  }

  getStartPosition() {
    return { x: '0', y: '0', z: '-100' }
  }

  launch(){

  }

}
