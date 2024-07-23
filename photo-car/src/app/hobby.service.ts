import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor() { }

  getHobby(){
    return {
      name: 'Странное хобби',
      description: 'Очень старнное хобби, которое не понятно как описывать'
    };
  }
}
