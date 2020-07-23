import { Component, OnInit } from '@angular/core';
import { log, my_alert } from 'src/app/my_modules/stuff';

declare var window;
declare var webkitSpeechRecognition;


@Component({
  selector: 'app-step-a',
  templateUrl: './step-a.component.html',
  styleUrls: ['./step-a.component.sass']
})
export class StepAComponent implements OnInit {
  SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  talker = new this.SpeechRecognition();

  results: [string];
  talking: boolean;

  constructor() {

    // this.recognition.continuous = true;
    // this.recognition.interimResults = true;

  }

  ngOnInit(): void {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Web Speech API is not supported by this browser. Please upgrade to Chrome version 25 or later.");
    } else {
      this.talker.continuous = true;

      this.talker.onstart = function () {
        log('onstart')
        this.talking = true;
        // micButton.style.color = "#B6412C";
      }

      this.talker.onend = function () {
        log('onend')

        this.talking = false;
        // micButton.style.color = "black";
      }

      this.talker.onresult = function (clip) {
        log('onresult', clip.results[0][0].transcript)
        console.log(clip)
      }

      this.talker.onerror = function(event) { 
        log(event)
       }

    }
  }

   startButton(event) {
     log(1123)
    if (this.talking) {
      log(' make stop')
    this.talking = false;

      this.talker.stop();
      return;
    }
    // transcript = '';
    log('start')
    this.talking = true;
    this.talker.start();
  }


  // start = () => {
  //   console.log('start')
  //   this.recognition.start();
  //   // button.textContent = "Stop listening";
  //   // main.classList.add("speaking");
  // };

  // stop = () => {
  //   this.recognition.stop();
  //   // button.textContent = "Start listening";
  //   // main.classList.remove("speaking");
  // };

  // onResult = event => {
  //   console.log(event)
  //   for (const res of event.results) {
  //     const text = document.createTextNode(res[0].transcript);
  //     if (res.isFinal) {
  //       this.results.push()
  //     }
  //   }

  //   this.recognition.continuous = true;
  //   this.recognition.interimResults = true;
  //   this.recognition.addEventListener("result", this.onResult);
  // };


  // startStop() {
  //   this.listening ? this.stop() : this.start();
  //   this.listening = !this.listening;
  // }


}
