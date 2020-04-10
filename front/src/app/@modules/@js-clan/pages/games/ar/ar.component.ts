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
  rockets: any = []

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
    setTimeout(() => this.spawn('enemy'), 30000);
    setTimeout(() => this.spawn('enemy'), 60000);

    this.spawn('enemy');
    this.spawnRocket()
    // this.spawnRocket()
    // this.spawnRocket()

    var cameraEl: any = document.querySelector('#camera');
    log(cameraEl)
    // AFRAME.registerComponent('rotation-reader', {
    //   tick:  ()=> {
    //     // `this.el` is the element.
    //     // `object3D` is the three.js object.
    //     // `rotation` is a three.js Euler using radians. `quaternion` also available.
    //     console.log('******************---------',cameraEl.object3D.rotation);
    //     // `position` is a three.js Vector3.
    //     console.log(cameraEl.object3D.position);
    //   }
    // });
    // inside an a-frame component



    window.addEventListener("keydown", (e) => {
      const camPos = this.camPos()
      const RockPosDeg = this.camPosToRockPosDeg(camPos)

      console.log('keydown', this.rockets, camPos, '::: ', RockPosDeg)
      log('_camPos -> ', this.camPos())

      this.rockets[0].link.setAttribute('rotation', RockPosDeg);
    })
  }

  camPos() {
    var player: any = document.querySelector("a-camera")
    var direction = new THREE.Vector3();
    const camPos = player.sceneEl.camera.getWorldDirection(direction);
    return camPos
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

  spawn(type) {
    // if (type == 'enemy') this.spawnEntity(type).setAttribute('gltf-model', 'url(assets/js-clan/3d/biotronican_crab_head_c1/scene.gltf)');
    // const en = this.spawnEntity(type)
    // en.setAttribute('gltf-model', 'url(assets/js-clan/3d/buster_drone/scene.gltf)');
    // en.setAttribute('scale', '0.01 0.01 0.01');

    // straaljager_met_raketten
    const en = this.spawnEntity(type)
    // en.setAttribute('gltf-model', 'url(assets/js-clan/3d/straaljager_met_raketten/scene.gltf)');
    en.setAttribute('gltf-model', 'url(assets/js-clan/3d/biotronican_crab_head_c1/scene.gltf)');

    // en.setAttribute('scale', '0.01 0.01 0.01');

  }

  spawnRocket() {
    // 0 0 -1 == -90 0 0
    log(this)

    var cameraEl: any = document.querySelector('#camera');
    var worldPos = new THREE.Vector3();
    worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
    console.log(worldPos);

    const en = this.spawnEntity('rocket', '0 -1 -0.5', '0.1 0.1 0.1');
    en.setAttribute('rotation', '-90 0 0');
    en.setAttribute('gltf-model', 'url(assets/js-clan/3d/simple_rocket/scene.gltf)');
    this.rockets.push({
      isFlying: false,
      link: en,
      vector: '',
      position: '0 -1 -0.5',
      speed: ''
    })
  }

  camPosToRockPosDeg(camPos) {
    // let RockPosDeg = `${camPos.y * 90 - 90} 0 ${(camPos.x * 90 * -1) }`
    let RockPosDeg = `
      ${ (camPos.z < 0) ? (camPos.y * 90 - 90) : 180 - (camPos.y * 90 - 90)} 
      0 
      ${ (camPos.z < 0) ? (camPos.x * 90 * -1) : 180 - (camPos.x * 90 * -1)}
    `
    return RockPosDeg
  }

  launch() {

  }

  rocketMove() {
    const camPos = this.camPos();

    const all = document.querySelectorAll('.rocket');
    all.forEach((x) => {
      const ownPosition: any = x.getAttribute('position'); 
      // shift
      ownPosition.z += camPos.z;
      ownPosition.x += camPos.x;
      ownPosition.y += camPos.y;

      x.setAttribute('position', ownPosition);
      const toFar = Math.max(
        Math.abs(ownPosition.y),
        Math.abs(ownPosition.x),
        Math.abs(ownPosition.z)
      )
      //200
      // log(toFar)
      if (toFar > 100) {
        this.toZero(x)
        // x.parentNode.removeChild(x);
      }
    })
  }

  aimMove() {
    const all = document.querySelectorAll('.enemy');
    all.forEach((x, i) => {
      const ownPosition: any = x.getAttribute('position');
      // log(i, ownPosition)

      // ownPosition.y += Math.random()*0.1 - 0.04
      // ownPosition.x += Math.random()*0.1 - 0.01
      // ownPosition.z += Math.random()*0.1 - 0.01
      ownPosition.y += 0.01
      ownPosition.x += 0.01
      ownPosition.z += 0.01

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

  toZero(x) {
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





///////////////////////////////////////////////////////////////////////////////////// XZ /////////////////////////////////////////////////
  xz() {
    window.addEventListener("keydown", (e) => {
      const camPos = this.camPos()
      const RockPosDeg = this.camPosToRockPosDeg(camPos)
      var player: any = document.querySelector("a-camera")
      var direction = new THREE.Vector3();
      // go forvard
      if (e.code === "KeyR") {
        // get the cameras world direction
        player.sceneEl.camera.getWorldDirection(direction);
        direction.multiplyScalar(0.1)
        // faster than the below code - but getAttribute wont work
        // player.object3D.position.add(direction)
        var pos = player.getAttribute("position")
        pos.x += direction.x
        pos.y += direction.y // comment this to get 2D movement
        pos.z += direction.z
        player.setAttribute("position", pos);
      }
    })
  }



}
