/*

Ctrl + k -> 2 --- Fold all methods
Ctrl + k -> j --- Unfold all

*/

import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ApiService } from '../../../../@common-dependencies/services/api.service';
import { log } from 'src/app/my_modules/stuff';
import appState from '../../../../../app-state';
declare let AFRAME: any;
declare let THREE: any;
declare let $: any;
declare var window: any;
declare var navigator: any;


@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ArComponent implements OnInit {

  fireFlow: any; // setInterval // fire loop
  rockets: any = [];
  readyMsg: string = 'Loaded...';
  onCamera: boolean = false;
  wiev_info: string = ':info:';
  lightLoop: any; // loop link
  // aims:any = []

  constructor() { }

  //
  // Run 1
  //
  ngOnInit(): void {
    // 40
    setInterval(() => this.aimMove(), 40);
    // setInterval(() => this.rocketMove(), 40);
    this.scene.addEventListener('loaded', _ => this.aFrameOnInit());
  }


  //
  // Run 2
  //
  aFrameOnInit() {
    this.readyMsg = 'READY !!!';
    // run gamepad
    this.runGamepad()
    
  }



  //
  // Run 3
  //
  run() {
    this.init_Listeners();
    //
    this.spawn('enemy', 'buster_drone');
    setTimeout(() => this.spawn('enemy', 'biotronican_crab-simple'), 30000);
    setTimeout(() => this.spawn('enemy', 'biotronican_crab-simple'), 60000);
    setTimeout(() => this.spawn('enemy', 'buster_drone'), 90000);
    setTimeout(() => this.spawn('enemy', 'biotronican_crab'), 120000);
    //
    this.spawnRocket();
    // this.spawnRocket();
    // this.spawnRocket();
    //
    this.init_VR_Camera();
    //
    // const soundBg: any = document.querySelector("#sound-bg")
    // soundBg.loop = true;
    // soundBg.play();
    //
    window.loop = setInterval(() => this.gameLoop(), 50)
    this.gameLoop()
  }

  //
  // Run 3 Gamepad
  //
  runGamepad() {
    //
    // ready ?
    //
    window.addEventListener("gamepadconnected",  (e) => {
      console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index, e.gamepad.id,
        e.gamepad.buttons.length, e.gamepad.axes.length);
      this.restart()
      log('Start gamepad loop !!!')
      window.loop = setInterval(() => this.gameLoop, 50)
    });

    window.addEventListener("gamepaddisconnected",  (e) => {
      console.log("Gamepad disconnected from index %d: %s",
        e.gamepad.index, e.gamepad.id);
    });
  }

  restart() {
    //alert('Need implement Restart')
  }

  //
  // ???
  //
  gameLoop() {
    log('gameLoop')
    // CONTROLS
    this.gp = window.gp = (navigator.webkitGetGamepads) ? navigator.webkitGetGamepads()[0] : navigator.getGamepads()[0]; // Get gamepad
    // if (this.isButton(window.gp, 0)) alert('Go Up')
    if (this.isButton(window.gp, 5)) this.fireStart()
    //alert(JSON.stringify(window.gp))
    // log((JSON.stringify(window.gp.buttons)))
    log('Gamepad')
    for (let key in window.gp.buttons){
      log(key, this.isButton(window.gp, key))
    }
    this.showButtons = JSON.stringify(window.gp)
  }
  showButtons: any = 'ready';
  gp: any;
  // GAMEPAD
// Gamepad Button Checker
isButton(gp, i) {
  if (!gp) return false;
  console.log('>>> ', gp.buttons[i], i)
  if (typeof gp.buttons[i] == 'number') return gp.buttons[0] == 1; // ??? // for webkitGetGamepads
  return (gp.buttons[i].value > 0 || gp.buttons[i].pressed == true)
}

ngIsButton(key){
  return this.isButton(this.gp, key)
}


//
// animate explosion
//
animateExplosion(position) {
  const exp: any = document.querySelector(".sprite");
  const expLight = document.querySelector("#exp-light");
  // log('exp: ', exp, RockPosDeg)
  exp.setAttribute('opacity', 1);
  exp.setAttribute('position', position);
  expLight.setAttribute('position', position);
  expLight.setAttribute('visible', 'true');
  //
  this.lightLoop = setInterval(() => {
    const scale = exp.getAttribute('scale');
    let opacity = exp.getAttribute('opacity');
    //
    scale.x += 0.4;
    scale.y += 0.4;
    opacity -= 0.04;
    //
    if (scale.x > 25) {
      scale.x = .1;
      scale.y = .1;
      opacity = 1;
      expLight.setAttribute('visible', 'false');
      clearInterval(this.lightLoop);
    }
    exp.setAttribute('scale', scale);
    exp.setAttribute('opacity', opacity);
  }, 40)
}


// info
info(info) {
  log(info);
  this.wiev_info = info;
}


//
// init VR Camera
//
init_VR_Camera() {
  this.camera.addEventListener('componentchanged', (evt: any) => {
    log('Camera event: ', evt);
    if (evt.detail.name == 'rotation') {
      this.rocketPositioning();
      this.explosionPsositioning();
    }
  });
}


//
// activate event listeners
//
init_Listeners() {
  window.addEventListener("keydown", (e) => {
    log('keydown');
  })
  document.addEventListener('keyup', (e) => {
    log(e)
    if (e.keyCode == 32) this.launch();
    if (e.code == 'KeyR') this.spawnRocket();
    if (e.code == 'KeyE') this.spawn('enemy', 'buster_drone');
  });
}


//
// explosion psositioning
//
explosionPsositioning() {
  const RockPosDeg = this.camPosToSpritePosDeg(this.camPos);
  // log('keydown', this.rockets, this.camPos, '::: ', RockPosDeg);
  // log('_camPos -> ', this.camPos );
  const exp: any = document.querySelector(".sprite");
  // log('exp: ', exp, RockPosDeg);
  exp.setAttribute('rotation', RockPosDeg);
  //
  // this.rockets.forEach((rocket) => {
  //   rocket.link.setAttribute('rotation', RockPosDeg);
  // })
}


//
// set roket position
//
rocketPositioning() {
  const RockPosDeg = this.camPosToRockPosDeg(this.camPos);
  // log('keydown', this.rockets, this.camPos, '::: ', RockPosDeg);
  // log('_camPos -> ', this.camPos);
  this.rockets.forEach((rocket) => {
    rocket.link.setAttribute('rotation', RockPosDeg);
  })
}


//
// fire start
//
fireStart() {
  this.launch();
  // this.fireFlow = setInterval(() => {
  //   this.spawn('enemy');
  // }, 500)
}


//
// fire end
//
fireEnd() {
  clearInterval(this.fireFlow);
}


//
// move to zero
//
toZero(x) {
  x.setAttribute('position', '0 -1 -0.5');
}



/////////////////////////////////////////////////////////////////////////
//                              SPAWNERS                               //
/////////////////////////////////////////////////////////////////////////  
//
// spawn Entity
//
spawnEntity(who, position = this.startPosition, scale = '40 40 40'): any {
  var newEl = document.createElement('a-entity');
  newEl.setAttribute('class', who);
  newEl.setAttribute('scale', scale);
  // newEl.setAttribute('scale', '0.01 0.01 0.01');
  newEl.setAttribute('position', position);
  // newEl._remove = () => newEl.parentNode.removeChild(newEl);
  this.scene.appendChild(newEl);
  return newEl
}
//
// spawn Enemy
//
spawn(who, type) {
  const en = this.spawnEntity(who)
  if (type == 'tree') {
    this.info('Generate: tree');
    en.setAttribute('gltf-model', 'url(assets/js-clan/3d/oak_tree_lowpoly/scene.gltf)');
    en.setAttribute('scale', '4 4 4');
  } else if (type == 'biotronican_crab') {
    this.info('Generate: biotronican_crab');
    en.setAttribute('gltf-model', 'url(assets/js-clan/3d/biotronican_crab_head_c1/scene.gltf)');
    en.setAttribute('scale', '20 20 20');
  } else if (type == 'biotronican_crab-simple') {
    this.info('Generate: biotronican_crab-simple');
    en.setAttribute('gltf-model', 'url(assets/js-clan/3d/biotronican_crab_head_c1/scene_simple.gltf)');
    en.setAttribute('scale', '20 20 20');
  } else if (type == 'buster_drone') {
    this.info('Generate: buster_drone');
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
  const idNum = this.rockets.length;
  var worldPos = new THREE.Vector3();
  worldPos.setFromMatrixPosition(this.camera.object3D.matrixWorld);
  //
  const en = this.spawnEntity('rocket', '0 -1 -0.5', '0.1 0.1 0.1');
  en.setAttribute('rotation', '-90 0 0');
  en.setAttribute('gltf-model', 'url(assets/js-clan/3d/simple_rocket/scene.gltf)');
  en.setAttribute('id', 'r-' + idNum);
  // sound="src: url(river.mp3); autoplay: true";
  //
  ////////// Sound component not playing audio asset across multiple entities in 0.8.*
  en.setAttribute('sound', `src: url(assets/js-clan/sound/Rocket-Thrusters-${idNum}.mp3); autoplay: true; loop: true `);
  //
  this.rockets.push({
    isFlying: false,
    link: en,
    // linkSound: null,
    vector: '',
    position: '0 -1 -0.5',
    speed: '',
    ownInterval: null
  });
}



/////////////////////////////////////////////////////////////////////////
//                             ACTIVATORS                              //
/////////////////////////////////////////////////////////////////////////  
//
// rockets activate
//
rocketsActivate(rocket, ownPosition) {
  this.animateExplosion(ownPosition);
  clearInterval(rocket.ownInterval);
  rocket.isFlying = false;
  this.toZero(rocket.link);
  // x.parentNode.removeChild(x);
}
//
// launch
//
launch() {
  // take 1 roket 
  // or delay sound
  const freeRoket = this.rockets.filter((x) => !x.isFlying); // boolean
  if (freeRoket.length > 0) {
    // log('has free rocket', freeRoket);
    const rocket = freeRoket[0];
    rocket.isFlying = true;
    rocket.ownInterval = setInterval(() => this.rocketMove(rocket), 40);
    setTimeout(() => {
      // clearInterval(roket.ownInterval)
    }, 500);
    // sound
    // launch-sound
    const soundLaunch: any = document.querySelector("#sound-launch");
    // soundLaunch.loop = true;
    // sound.pause();
    soundLaunch.currentTime = 0;
    soundLaunch.play();
  }
  else {
    log('all isFlying', freeRoket);
  }
}



/////////////////////////////////////////////////////////////////////////
//                                MOVERS                               //
/////////////////////////////////////////////////////////////////////////
aimMove() {
  const all = document.querySelectorAll('.enemy');
  all.forEach((x, i) => {
    const ownPosition: any = x.getAttribute('position');
    // log(i, ownPosition);
    //
    // ownPosition.y += Math.random()*0.1 - 0.04;
    // ownPosition.x += Math.random()*0.1 - 0.01;
    // ownPosition.z += Math.random()*0.1 - 0.01;
    ownPosition.y += 0.01;
    ownPosition.x += 0.01;
    ownPosition.z += 0.01;
    //
    x.setAttribute('position', ownPosition);
    const toFar = Math.max(
      Math.abs(ownPosition.y),
      Math.abs(ownPosition.x),
      Math.abs(ownPosition.z)
    )
    //200
    if (toFar > 100) this.toBegin(x); //this.remove(x) //x.parentNode.removeChild(x);
    // if (toFar > 40) this.remove(x) //x.parentNode.removeChild(x);
  })
}
toBegin(x) {
  x.setAttribute('position', this.startPosition);
}
rocketMove(rocket) {
  // log(rocket);
  // clearInterval(roket.ownInterval);
  //
  // const all = document.querySelectorAll('.rocket');
  // all.forEach((x) => {
  const x = rocket.link;
  const ownPosition: any = x.getAttribute('position');
  // shift
  ownPosition.z += this.camPos.z;
  ownPosition.x += this.camPos.x;
  ownPosition.y += this.camPos.y;
  // rocket.linkSound.setAttribute('position', ownPosition);
  // log(ownPosition);
  const toFar = Math.max(
    Math.abs(ownPosition.y),
    Math.abs(ownPosition.x),
    Math.abs(ownPosition.z)
  )
  // log(toFar);
  if (toFar > 60) this.rocketsActivate(rocket, ownPosition);
  // check every
  const allEnemies = document.querySelectorAll('.enemy');
  allEnemies.forEach((en) => {
    // distance betwen
    const distance = this.distanceBetven3D(x, en);
    // log('distanceBetven3D: ', distance);
    if (distance < 3) {
      this.rocketsActivate(rocket, ownPosition);
      this.toBegin(en);
    }
  })
  x.setAttribute('position', ownPosition);
}



/////////////////////////////////////////////////////////////////////////
//                             CALCULATORS                             //
/////////////////////////////////////////////////////////////////////////
distanceBetven3D(a, b) {
  const _a = a.getAttribute('position');
  const _b = b.getAttribute('position');
  const xDistance = Math.abs(Math.abs(_a.x) - Math.abs(_b.x));
  const yDistance = Math.abs(Math.abs(_a.y) - Math.abs(_b.y));
  const zDistance = Math.abs(Math.abs(_a.z) - Math.abs(_b.z));
  return (xDistance + yDistance + zDistance) / 3
}
camPosToSpritePosDeg(camPos) {
  // let RockPosDeg = `${camPos.y * 90 - 90} 0 ${(camPos.x * 90 * -1) }`
  log((camPos.z < 0))
  let RockPosDeg = `
      ${ (camPos.z < 0) ? 180 - (camPos.y * 90) : (camPos.y * 90) - 180} 
      ${ (camPos.z < 0) ? 180 - (camPos.x * 90) : (camPos.x * 90 - 180)} 
      0
    `;
  return RockPosDeg
}
camPosToRockPosDeg(camPos) {
  // let RockPosDeg = `${camPos.y * 90 - 90} 0 ${(camPos.x * 90 * -1) }`
  let RockPosDeg = `
      ${ (camPos.z < 0) ? (camPos.y * 90 - 90) : 180 - (camPos.y * 90 - 90)} 
      0 
      ${ (camPos.z < 0) ? (camPos.x * 90 * -1) : 180 - (camPos.x * 90 * -1)}
    `;
  return RockPosDeg
}



/////////////////////////////////////////////////////////////////////////
//                               GETTERS                               //
/////////////////////////////////////////////////////////////////////////
get camera(): any {
  return document.querySelector('#camera');
}
get marker(): any {
  return document.querySelector('#marker');
}
get scene(): any {
  return document.querySelector('a-scene');
}
get markerPosition() {
  // return (this.getMarker) ? this.getMarker.object3D.getWorldPosition() : {x:0, y:0, z:0}
  return { x: '0', y: '0', z: '-100' };
}
get startPosition() {
  return '-10 0.5 -50';
  // return { x: '0', y: '0', z: '-100' }
}
// get camera position
//
get camPos() {
  var direction = new THREE.Vector3();
  return this.camera.sceneEl.camera.getWorldDirection(direction);
}



///////////////////////////////////////////////////////////////////////////////////// XZ /////////////////////////////////////////////////
xz() {
  window.addEventListener("keydown", (e) => {
    const RockPosDeg = this.camPosToRockPosDeg(this.camPos); // ???
    var player: any = document.querySelector("a-camera");
    var direction = new THREE.Vector3();
    // go forvard
    if (e.code === "KeyR") {
      // get the cameras world direction
      player.sceneEl.camera.getWorldDirection(direction);
      direction.multiplyScalar(0.1);
      // faster than the below code - but getAttribute wont work
      // player.object3D.position.add(direction)
      var pos = player.getAttribute("position");
      pos.x += direction.x;
      pos.y += direction.y; // comment this to get 2D movement
      pos.z += direction.z;
      player.setAttribute("position", pos);
    }
  })
}

getPosition(x) {
}

setPosition(x) {
}

//
// remove ???
//
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
}
