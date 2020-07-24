import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { ValidatorService } from '../../../../@modules/@common-dependencies/services/validator.service';
import { ApiService } from '../../../../@modules/@common-dependencies/services/api.service'
import { StorageService } from '../../../../@modules/@common-dependencies/services/storage.service'
import { SpeechService } from '../../../../@modules/@common-dependencies/services/speech.service'
import { log, my_alert } from 'src/app/my_modules/stuff';

@Component({
  selector: 'app-step-a',
  templateUrl: './step-a.component.html',
  styleUrls: ['./step-a.component.sass']
})

export class StepAComponent implements OnInit {

  questions = [
    {
      question: 'Как мы думаем? Почему в словах нет понимания? Можно ли научиться понимать, что происходит на самом деле? Почему так важен новый опыт для нашего мозга и как заставить его думать по-новому?',
      answers: [
        'Как мы думаем?',
        'Почему в словах нет понимания?',
        'Что происходит на самом деле?',
        'Как заставить его думать по-новому?',
      ],
      correctAnswer: 1
    }
  ];
  currentQuestion: number;

  constructor(
    public speech: SpeechService
  ) {
    this.currentQuestion = 0; //questions[0].question;
  }

  speak() {
    log(this.questions[this.currentQuestion].question);
    this.speech.speak(this.questions[this.currentQuestion].question);
  }

  ngOnInit(): void {

  }

  startButton(event) {
    this.speech.toggle();
  }

}
