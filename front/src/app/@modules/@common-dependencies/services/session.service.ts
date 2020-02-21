import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private api: ApiService) { }
  fake = JSON.parse('{"user":{"wallets":{"USD":{"balance":0}},"facebook":{"id":"2712492348826122","username":"Taras Ostasha","email":""},"purchases_made":[],"saved_numbers":[],"linked_users":[],"_id":"5d063f55ba40b4ee185dea94","last_login":"2019-06-16T13:08:37.543Z","last_appeal":"2019-06-16T13:08:37.543Z","username":"Taras Ostasha","email":"","created":"2019-06-16T13:08:37.546Z","__v":0}}')
  //3 set user
  setUser(fromServer) {
    if (fromServer.user) localStorage.setItem('user', JSON.stringify(fromServer.user));
    else console.log('set user aborted because not exist');
  }
  async getUser() {
    try {
      const json = localStorage.getItem('user');
      if (json == 'undefined') this.removeUser();
      if (json && json !== 'undefined') return JSON.parse(json);

      const fromServer: any = await this.api.getSessionInfo();
      if (fromServer.user) { this.setUser(fromServer); return fromServer } //if session
      //else res('no session') //if no session
      else return this.fake;
    } catch (error) {
      throw error;
    }
  }
  removeUser() {
    localStorage.removeItem('user'); //check if it is correct writing
  }
  //2 request to server get user if session keep
  // async getUserFromServer() : Promise<void>{
  //   this.api.getSessionInfo().subscribe((fromServer: any)=>{
  //     if(!fromServer.user) {
  //       console.log('session false')
  //       return 'no ssesion';
  //     }else {
  //       console.log(fromServer, 'session user')
  //       return 'from server';
  //     }
  //   },(err)=>{
  //     console.log(err)
  //   })
  // }

}
