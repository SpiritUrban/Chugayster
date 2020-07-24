import { Injectable } from '@angular/core';
import { log, my_alert } from 'src/app/my_modules/stuff';
declare var window;
declare var webkitSpeechRecognition;

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  talker = new this.SpeechRecognition();
  // results: [string];

  talking: boolean = false;

  constructor() {
    this.init();
  }

  init() {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Web Speech API is not supported by this browser. Please upgrade to Chrome version 25 or later.");
    } else {
      this.talker.continuous = true;

      this.talker.onstart = function () {
        log('onstart')
        this.talking = true;
      }

      this.talker.onend = function () {
        log('onend')
        this.talking = false;
      }

      this.talker.onresult = function (clip) {
        log('onresult', clip.results[0][0].transcript)
        console.log(clip)
      }

      this.talker.onerror = function (event) {
        log(event)
      }
    }
  }

  toggle() {
    log('Service toggle was clicked !!!')
    if (this.talking) {
      log(' make stop')
      this.talking = false;
      this.talker.stop();
      return;
    }
    log('start')
    this.talking = true;
    this.talker.start();
  }

  test() {
    log('Speech Works');
  }

}

  // this.recognition.continuous = true;
  // this.recognition.interimResults = true;

  // onResult = event => {
  //   this.recognition.continuous = true;
  //   this.recognition.interimResults = true;
  //   this.recognition.addEventListener("result", this.onResult);
  // };