import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getBasketFromStorage() {
    const json = localStorage.getItem('basket');
    if (json == null) return []
    else return JSON.parse(json);
  }


  setItem(key, value) {
    //return Promise.resolve().then(function () {
      localStorage.setItem(key, value);
    //});
  }
  getItem(key) {
    return Promise.resolve().then(function () {
      return localStorage.getItem(key);
    });
  }

  //const setItem2 = (key, value) => Promise.resolve().then( () =>  localStorage.setItem(key, value) );
  //const getItem2 = (key) => Promise.resolve().then( () => localStorage.getItem(key));
}
