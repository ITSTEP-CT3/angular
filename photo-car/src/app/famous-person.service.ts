import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FamousPersonService {

  constructor() { }

  getFamousPerson() {
    return {
      name: 'Известная персона',
      facts: 'Интересные факты об этой персоне'
    };
  }
}
