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
  rockets: any = []
  readyMsg: string = 'Loaded...'
  onCamera: boolean = false;
  wiev_info: string = ':info:'
  // aims:any = []

  constructor() { }

  //
  // Run 1
  //
  ngOnInit(): void {
    // 40
    setInterval(() => this.aimMove(), 40);
    // setInterval(() => this.rocketMove(), 40);
    document.querySelector('a-scene').addEventListener('loaded', _ => this.aFrameOnInit());
  }

  run() {
    this.init_Listeners();

    this.spawn('enemy', 'tree');
    setTimeout(() => this.spawn('enemy', 'biotronican_crab-simple'), 30000);
    setTimeout(() => this.spawn('enemy', 'biotronican_crab-simple'), 60000);
    setTimeout(() => this.spawn('enemy', 'buster_drone'), 90000);
    setTimeout(() => this.spawn('enemy', 'biotronican_crab'), 120000);

    this.spawnRocket();
    // this.spawnRocket();
    // this.spawnRocket();

    this.init_VR_Camera()

    // const soundBg: any = document.querySelector("#sound-bg")
    // soundBg.loop = true;
    // soundBg.play();
  }


  lightLoop: any
  animateExplosion(position) {
    const exp: any = document.querySelector(".sprite");
    const expLight = document.querySelector("#exp-light");
    // log('exp: ', exp, RockPosDeg)
    exp.setAttribute('opacity', 1);
    exp.setAttribute('position', position);
    expLight.setAttribute('position', position);

    this.lightLoop = setInterval(() => {
      const scale = exp.getAttribute('scale')
      let opacity = exp.getAttribute('opacity')
      // let expLightPosition = expLight.getAttribute('position')// obj
      expLight.setAttribute('visible', 'true');

      scale.x += 0.4
      scale.y += 0.4
      opacity -= 0.04
      // position.x -= 0.002
      //position.y += 0.02

      const rocketPosition = this.rockets[0].link.getAttribute('position')

      if (scale.x > 25) {
        scale.x = .1
        scale.y = .1
        opacity = 1
        expLight.setAttribute('visible', 'false');
        clearInterval(this.lightLoop)
      }

      exp.setAttribute('scale', scale);
      exp.setAttribute('opacity', opacity);
    }, 40)
  }

  //
  // Run 2
  //
  aFrameOnInit() {
    this.readyMsg = 'READY !!!'
  }

  // info
  info(info) {
    log(info);
    this.wiev_info = info;
  }



  init_VR_Camera() {
    var cameraEl: any = document.querySelector('#camera');
    log(cameraEl);
    // inside an a-frame component
    document.querySelector('[camera]').addEventListener('componentchanged', (evt: any) => {
      // if (evt.name !== 'rotation') { return; }
      // if (evt.newData.y < 180) { // ... }
      console.log('******************---------', evt);
      if (evt.detail.name = 'rotation') {
        this.rocketPositioning()
        this.explosionPsositioning()
      }
    });
  }


  //
  // activate event listeners
  //
  init_Listeners() {
    window.addEventListener("keydown", (e) => {
      log('keydown')
      // this.rocketPositioning()
    })
    document.addEventListener('keyup', (e) => {
      if (e.keyCode !== 32) return;
      // this.spawn('enemy');
      // this.spawnRocket()
      this.launch()
    });
  }

  //
  // get scene link
  //
  sceneEl: any = () => document.querySelector('a-scene');

  explosionPsositioning() {
    const camPos = this.camPos()
    const RockPosDeg = this.camPosToSpritePosDeg(camPos)
    log('keydown', this.rockets, camPos, '::: ', RockPosDeg)
    log('_camPos -> ', this.camPos())
    const exp: any = document.querySelector(".sprite")
    // log('exp: ', exp, RockPosDeg)
    exp.setAttribute('rotation', RockPosDeg);

    // this.rockets.forEach((rocket) => {
    //   rocket.link.setAttribute('rotation', RockPosDeg);
    // })
  }


  //
  // set roket position
  //
  rocketPositioning() {
    const camPos = this.camPos()
    const RockPosDeg = this.camPosToRockPosDeg(camPos)
    log('keydown', this.rockets, camPos, '::: ', RockPosDeg)
    log('_camPos -> ', this.camPos())
    this.rockets.forEach((rocket) => {
      rocket.link.setAttribute('rotation', RockPosDeg);
    })
  }

  //
  // get camera position
  //
  camPos() {
    var player: any = document.querySelector("a-camera")
    var direction = new THREE.Vector3();
    const camPos = player.sceneEl.camera.getWorldDirection(direction);
    return camPos
  }

  //
  // spawn Entity
  //
  spawnEntity(who, position = '-10 0.5 -20', scale = '40 40 40'): any {
    var newEl = document.createElement('a-entity');
    newEl.setAttribute('class', who);
    newEl.setAttribute('scale', scale);
    // newEl.setAttribute('scale', '0.01 0.01 0.01');
    newEl.setAttribute('position', position);
    // newEl._remove = () => newEl.parentNode.removeChild(newEl);
    this.sceneEl().appendChild(newEl);
    return newEl
  }


  //
  // spawn Enemy
  //
  spawn(who, type) {
    const en = this.spawnEntity(who)
    if (type == 'tree') {
      this.info('Generate: tree')
      en.setAttribute('gltf-model', 'url(assets/js-clan/3d/oak_tree_lowpoly/scene.gltf)');
      en.setAttribute('scale', '4 4 4');
    } else if (type == 'biotronican_crab') {
      this.info('Generate: biotronican_crab')
      en.setAttribute('gltf-model', 'url(assets/js-clan/3d/biotronican_crab_head_c1/scene.gltf)');
      en.setAttribute('scale', '40 40 40');
    } else if (type == 'biotronican_crab-simple') {
      this.info('Generate: biotronican_crab-simple')
      en.setAttribute('gltf-model', 'url(assets/js-clan/3d/biotronican_crab_head_c1/scene_simple.gltf)');
      en.setAttribute('scale', '40 40 40');
    } else if (type == 'buster_drone') {
      this.info('Generate: buster_drone')
      en.setAttribute('gltf-model', 'url(assets/js-clan/3d/buster_drone/scene.gltf)');
      en.setAttribute('scale', '0.01 0.01 0.01');
    }

    // en.setAttribute('geometry', 'primitive: box; width: 100; height: 100; depth: 100)');
    // en.setAttribute('obj-model', 'url(assets/js-clan/3d/Rubber_duck/Rubber_duck.obj)');
    // en.setAttribute('color', 'rgb(44, 57, 44)');
    // en.setAttribute('material', 'color: red');
    // en.setAttribute('scale', '0.01 0.01 0.01');
  }

  //
  // spawn Rocket
  //
  spawnRocket() {
    // 0 0 -1 == -90 0 0
    log(this)
    const idNum = this.rockets.length
    var cameraEl: any = document.querySelector('#camera');
    var worldPos = new THREE.Vector3();
    worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);

    const en = this.spawnEntity('rocket', '0 -1 -0.5', '0.1 0.1 0.1');
    en.setAttribute('rotation', '-90 0 0');
    en.setAttribute('gltf-model', 'url(assets/js-clan/3d/simple_rocket/scene.gltf)');
    en.setAttribute('id', 'r-' + idNum);
    // sound="src: url(river.mp3); autoplay: true"

    ////////// Sound component not playing audio asset across multiple entities in 0.8.*
    en.setAttribute('sound', `src: url(assets/js-clan/sound/Rocket-Thrusters-${idNum}.mp3); autoplay: true; loop: true `);

    log('>>>>>>>>>>>>', `Rocket-Thrusters-${idNum}.mp3`)

    this.rockets.push({
      isFlying: false,
      link: en,
      // linkSound: null,
      vector: '',
      position: '0 -1 -0.5',
      speed: '',
      ownInterval: null
    })
  }

  camPosToSpritePosDeg(camPos) {
    // let RockPosDeg = `${camPos.y * 90 - 90} 0 ${(camPos.x * 90 * -1) }`
    log((camPos.z < 0))
    let RockPosDeg = `
      ${ (camPos.z < 0) ? 180 - (camPos.y * 90) : (camPos.y * 90) - 180} 
      ${ (camPos.z < 0) ? 180 - (camPos.x * 90) : (camPos.x * 90 - 180)} 
      0
    `
    return RockPosDeg
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
    // take 1 roket 
    // or delay sound
    const freeRoket = this.rockets.filter((x) => !x.isFlying) // boolean
    if (freeRoket.length > 0) {
      log('has free rocket', freeRoket)
      const rocket = freeRoket[0]
      rocket.isFlying = true;
      rocket.ownInterval = setInterval(() => this.rocketMove(rocket), 40);
      setTimeout(() => {
        // clearInterval(roket.ownInterval)
      }, 500)
      // sound
      // launch-sound
      const soundLaunch: any = document.querySelector("#sound-launch")
      // soundLaunch.loop = true;
      // sound.pause();
      soundLaunch.currentTime = 0;
      soundLaunch.play();
    }
    else {
      log('all isFlying', freeRoket)
    }
  }


  distanceBetven3D(a, b) {
    const _a = a.getAttribute('position');
    const _b = b.getAttribute('position');

    const xDistance = Math.abs(Math.abs(_a.x) - Math.abs(_b.x));
    const yDistance = Math.abs(Math.abs(_a.y) - Math.abs(_b.y));
    const zDistance = Math.abs(Math.abs(_a.z) - Math.abs(_b.z));
    log('>>>>>>> ', _a, _b)
    return (xDistance + yDistance + zDistance) / 3
  }

  rocketMove(rocket) {
    log(rocket)
    const camPos = this.camPos();
    // clearInterval(roket.ownInterval)

    // const all = document.querySelectorAll('.rocket');
    // all.forEach((x) => {
    const x = rocket.link
    const ownPosition: any = x.getAttribute('position');
    // shift
    ownPosition.z += camPos.z;
    ownPosition.x += camPos.x;
    ownPosition.y += camPos.y;

    // rocket.linkSound.setAttribute('position', ownPosition);
    log(ownPosition)

    const toFar = Math.max(
      Math.abs(ownPosition.y),
      Math.abs(ownPosition.x),
      Math.abs(ownPosition.z)
    )


    //200
    // log(toFar)
    if (toFar > 40) this.rocketSctivate(rocket, ownPosition);

    // check every
    const allEnemies = document.querySelectorAll('.enemy');
    allEnemies.forEach((en) => {
      // distance betwen
      const distance = this.distanceBetven3D(x, en);
      log('distanceBetven3D: ', distance)
      if ( distance < 2) this.rocketSctivate(rocket, ownPosition);
    })

    x.setAttribute('position', ownPosition);
  }

  // ---
  rocketSctivate(rocket, ownPosition) {
    this.animateExplosion(ownPosition);
    clearInterval(rocket.ownInterval)
    rocket.isFlying = false
    this.toZero(rocket.link)
    // x.parentNode.removeChild(x);
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
    this.launch()
    log('firestart')
    // this.fireFlow = setInterval(() => {
    //   this.spawn('enemy');
    // }, 500)
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
