import { Component, OnInit, OnDestroy } from '@angular/core';
import  state  from '../../../../app-state';
import { log } from '../../../../my_modules/stuff';
import team from '../../data/team';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})

export class AboutUsComponent implements OnInit {

  team = team;

  constructor() { }

  ngOnInit() {
    state.nav.msg += 2
    this.arrayRandomizer(team);
  }
 
  ngOnDestroy() { 
  } 

  arrayRandomizer(arr){
    let firstItem = arr.shift(),
        allItems = this.shuffledArr(arr);  

    return allItems.unshift(firstItem);
  }

  shuffledArr = (arr) =>  arr.sort(() => Math.random() - 0.5);
}
