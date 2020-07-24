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

  constructor(
    public speech: SpeechService
  ) {

  }

  ngOnInit(): void {
  }

  startButton(event) {
    this.speech.toggle();
  }

}
