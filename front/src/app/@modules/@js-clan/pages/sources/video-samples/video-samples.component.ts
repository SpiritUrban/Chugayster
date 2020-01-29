import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-samples',
  templateUrl: './video-samples.component.html',
  styleUrls: ['./video-samples.component.sass']
})
export class VideoSamplesComponent implements OnInit {

  constructor() { }

  place = 'assets/js-clan/img/sources/video-samples/'
  list = [
    {
      link: 'https://pixabay.com/videos/search/?pagi=4',
      img: this.place + 'pixabay.jpg',
      description: 'pixabay.com'
    },
    
    {
      link: 'https://www.videvo.net/free-stock-footage/sort/popular/',
      img: this.place + 'videvo.jpg',
      description: 'videvo.net'
    },
    {
      link: 'https://www.pexels.com/search/videos/tech/',
      img: this.place + 'pexels.jpg',
      description: 'pexels.com'
    },
    // {
    //   link: '',
    //   img: this.place + '',
    //   description: ''
    // },
  ]

  ngOnInit() {
  }

}