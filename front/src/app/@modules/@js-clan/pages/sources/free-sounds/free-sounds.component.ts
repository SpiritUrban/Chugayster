import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-sounds',
  templateUrl: './free-sounds.component.html',
  styleUrls: ['./free-sounds.component.sass']
})
export class FreeSoundsComponent implements OnInit {

  place = 'assets/js-clan/img/sources/free-sounds/'
  list = [
    {
      link: 'https://freesound.org/',
      img: this.place + 'freesound.jpg',
      description: 'freesound.org'
    },

    {
      link: 'https://www.zapsplat.com/sound-effect-category/carts-and-trolleys/',
      img: this.place + 'ZapSplat.jpg',
      description: 'ZapSplat.com'
    },
    {
      link: 'https://ru.audiomicro.com/besplatno-zvukovie-effekti/svobodnoy-industrialnoy-i-oborudovanie',
      img: this.place + 'audiomicro.jpg',
      description: 'ru.audiomicro.com'
    },
    {
      link: 'https://www.musicradar.com/news/sampleradar-244-free-big-impact-samples',
      img: this.place + 'musicradar.jpg',
      description: 'musicradar.com'
    },
    {
      link: 'https://www.looperman.com/loops/tags/royalty-free-sound-effect-loops-samples-sounds-wavs-download',
      img: this.place + 'looperman.jpg',
      description: 'looperman.com'
    },
    {
      link: '',
      img: this.place + '.jpg',
      description: ''
    },
    {
      link: '',
      img: this.place + '.jpg',
      description: ''
    },
    {
      link: '',
      img: this.place + '.jpg',
      description: ''
    },
    {
      link: '',
      img: this.place + '.jpg',
      description: ''
    },
    {
      link: '',
      img: this.place + '.jpg',
      description: ''
    },
    {
      link: '',
      img: this.place + '.jpg',
      description: ''
    },
    {
      link: '',
      img: this.place + '.jpg',
      description: ''
    },
    {
      link: '',
      img: this.place + '.jpg',
      description: ''
    },
    {
      link: '',
      img: this.place + '.jpg',
      description: ''
    },
    {
      link: '',
      img: this.place + '.jpg',
      description: ''
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
