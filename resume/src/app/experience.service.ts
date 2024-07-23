import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }
  getExperience() {
    return [
      {company: 'рога и копыта', position: 'менеджер', years: '2018-2020'},
      {company: 'Академия ТОП', 
        position: 'верховный преподаватель',
         years: '2021-2024'},
    ];
  }
}
