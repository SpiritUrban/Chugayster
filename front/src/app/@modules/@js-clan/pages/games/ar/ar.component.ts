import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ApiService } from '../../../../@common-dependencies/services/api.service';
import { log } from 'src/app/my_modules/stuff';
import appState from '../../../../../app-state';
declare let AFRAME: any;
declare let THREE: any;
declare let $: any;




declare var window: any;
@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ArComponent implements OnInit {

  fireFlow: any; // setInterval // fire loop

  // aims:any = []
  // rockets: any = []

  constraints = window.constraints = {
    audio: false,
    video: true
  };

  constructor() { }

  ngOnInit(): void {
    // 40
    setInterval(() => this.aimMove(), 40);
    setInterval(() => this.rocketMove(), 40);

    document.querySelector('#showVideo').addEventListener('click', e => this.init(e));
    document.querySelector('a-scene').addEventListener('loaded', _ => this.aFrameOnInit());
  }

  sceneEl = () => document.querySelector('a-scene');


  x() {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode !== 32) return;
      // this.spawn('enemy');
      // this.spawnRocket()
    });
  }

  info(info) {
    alert(info)
  }

  aFrameOnInit() {
    log('aFrameOnInit', this);
    alert('LOADED');
    this.x();
    //setInterval(() => this.spawn('enemy'), 15000);
    setTimeout(() => this.spawn('enemy'), 15000);
    setTimeout(() => this.spawn('enemy'), 24000);

    this.spawn('enemy');
    this.spawnRocket()
    this.spawnRocket()
    this.spawnRocket()
    
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


  // const marker: any = document.querySelector('#marker')
  // const position = marker.object3D.getWorldPosition()
  // var position = this.getMarkerPosition()
  // position.y = '0.5';

  spawn(type) {
    // if (type == 'enemy') this.spawnEntity(type).setAttribute('gltf-model', 'url(assets/js-clan/3d/biotronican_crab_head_c1/scene.gltf)');
    const en =  this.spawnEntity(type)
    en.setAttribute('gltf-model', 'url(assets/js-clan/3d/buster_drone/scene.gltf)');
    en.setAttribute('scale', '0.01 0.01 0.01');

  }

  spawnRocket() {
    log(this)

    var cameraEl: any = document.querySelector('#camera');
    var worldPos = new THREE.Vector3();
    worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
    console.log(worldPos);

    const en = this.spawnEntity('rocket', '0 -1 -0.5', '0.1 0.1 0.1');
    en.setAttribute('rotation', '-90 0 0');
    en.setAttribute('gltf-model', 'url(assets/js-clan/3d/simple_rocket/scene.gltf)');
    // this.rockets.push(en)
  }

  spawnEntity(type, position = '-10 0.5 -20', scale = '40 40 40'): any {
    var newEl = document.createElement('a-entity');
    newEl.setAttribute('class', type);
    newEl.setAttribute('scale', scale);
    // newEl.setAttribute('scale', '0.01 0.01 0.01');

    newEl.setAttribute('position', position);
    // newEl._remove = () => newEl.parentNode.removeChild(newEl);
    this.sceneEl().appendChild(newEl);
    return newEl
  }

  rocketMove() {
    // const x: any = document.querySelector('.rocket');
    // if (x) {
    //   const ownPosition: any = x.getAttribute('position');
    //   ownPosition.y += Math.random() - 0.5
    //   ownPosition.x += Math.random() - 0.5
    //   ownPosition.z += Math.random() - 0.9
    //   x.setAttribute('position', ownPosition);
    //   const toFar = Math.max(
    //     Math.abs(ownPosition.y),
    //     Math.abs(ownPosition.x),
    //     Math.abs(ownPosition.z)
    //   )
    //   //200
    //   log(toFar)
    //   if (toFar > 10) {
    //     x.parentNode.removeChild(x);
    //     // THREE.Cache.clear()
    //     // x.remove();
    //   }
    // }
    // log(x)
    const all =  document.querySelectorAll('.rocket');
    all.forEach((x) => {
      const ownPosition: any = x.getAttribute('position');
      // ownPosition.y += Math.random() - 0.5
      // ownPosition.x += Math.random() - 0.5
      // ownPosition.z += Math.random() - 0.9
      ownPosition.z -= 1;
      x.setAttribute('position', ownPosition);
      const toFar = Math.max(
        Math.abs(ownPosition.y),
        Math.abs(ownPosition.x),
        Math.abs(ownPosition.z)
      )
      //200
      // log(toFar)
      if (toFar > 100)  {
        this.toZero(x)
        // x.parentNode.removeChild(x);
      }
    })
  }

  aimMove() {
    const all = document.querySelectorAll('.enemy');
    all.forEach((x, i) => {
      const ownPosition: any = x.getAttribute('position');
      log(i, ownPosition)

      // ownPosition.y += Math.random()*0.1 - 0.04
      // ownPosition.x += Math.random()*0.1 - 0.01
      // ownPosition.z += Math.random()*0.1 - 0.01
      ownPosition.y +=   0.01
      ownPosition.x +=  0.01
      ownPosition.z +=  0.01

      x.setAttribute('position', ownPosition);
      const toFar = Math.max(
        Math.abs(ownPosition.y),
        Math.abs(ownPosition.x),
        Math.abs(ownPosition.z)
      )
      //200
      if (toFar > 100) this.toBegin(x) //this.remove(x) //x.parentNode.removeChild(x);
      // if (toFar > 40) this.remove(x) //x.parentNode.removeChild(x);

    })
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

  remove(x: any) {
    // AFRAME.registerComponent('light', {
    //   // ...
    //   remove:  () =>  {
    //     x.removeObject3D('light');
    //   }
    //   // ...
    // });
    // x._remove()
    x.parentNode.removeChild(x);
    // delete this.rockets[0]
    // x = null; //delete x;
  }

  toBegin(x) {
    x.setAttribute('position', this.getStartPosition());
  }

  toZero(x){
    x.setAttribute('position', '0 -1 -0.5');

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
    return '0 0 -100'
    // return { x: '0', y: '0', z: '-100' }
  }

  launch() {

  }

}
