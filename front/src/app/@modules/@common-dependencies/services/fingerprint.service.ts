import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FingerprintService {

  constructor( private storage: StorageService, private api: ApiService ) { }

  async checkIfItExist() {
    //console.log(await this.getFingerPrint())
    if ( ! await this.getFingerPrint()) this.createFingerPrint(); // <-- there is something wrong with IF statement
    
  }

  async getFingerPrint() {
    return await this.storage.getItem('session') // get item is finger print
  }

  async createFingerPrint() {
    const fromServer: any = await this.api.createFingerPrint({ appVersion: navigator.appVersion });
    console.log('token from server - ', fromServer);
    this.storage.setItem('session', fromServer.session)
    // token set to local storage 
    
  }

}


    // *finger print mechanism* //
    // check if there exist finger print in local storage
    // 1 get local information
    // send to back end 
    // BACK - 
      // generate random number/string
      // encript this obj (finger print)
      // transfer to front end and write to data base (w/ additional info from request)
    //FRONT
      // write this finger print to local storage 