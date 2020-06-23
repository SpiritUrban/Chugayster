import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-night-sky',
  templateUrl: './night-sky.component.html',
  styleUrls: ['./night-sky.component.sass']
})
export class NightSkyComponent implements OnInit {

  allStars:any = this.randStar(200);
  constructor() { }

  ngOnInit(): void {
  }

  randStar(times){
    const result = [];
    for (let i=0; i<times; i++){
      result.push({
        cx: Math.round(Math.random() * 10000) / 100 + '%',
				cy: Math.round(Math.random() * 10000) / 100 + '%',
				r: Math.round((Math.random() + 0.5) * 10) / 10
      });
    }
    console.log(result)
    return result
  }
}
