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
      link: 'https://www.producerloops.com/download-royalty-free-loops-and-samples/index3.html?a=1&sort=add_date&sort_direction=1',
      img: this.place + 'producerloops.jpg',
      description: 'producerloops.com'
    },
    {
      link: 'https://soundcloud.com/search?q=Creative%20Commons%20drum',
      img: this.place + 'soundcloud.jpg',
      description: 'soundcloud.com | Creative Commons'
    },
    // {
    //   link: '',
    //   img: this.place + '.jpg',
    //   description: ''
    // },
    // {
    //   link: '',
    //   img: this.place + '.jpg',
    //   description: ''
    // },
    // {
    //   link: '',
    //   img: this.place + '.jpg',
    //   description: ''
    // },
    // {
    //   link: '',
    //   img: this.place + '.jpg',
    //   description: ''
    // },
    // {
    //   link: '',
    //   img: this.place + '.jpg',
    //   description: ''
    // },
    // {
    //   link: '',
    //   img: this.place + '.jpg',
    //   description: ''
    // },
    // {
    //   link: '',
    //   img: this.place + '.jpg',
    //   description: ''
    // },
    // {
    //   link: '',
    //   img: this.place + '.jpg',
    //   description: ''
    // }
  ]
  constructor() { }

  ngOnInit() {
  }

}
