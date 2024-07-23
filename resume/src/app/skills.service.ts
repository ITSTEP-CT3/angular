import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills() {
    return [
      'Плавать',
      'Лежать',
      'Кушать'
    ];
  }
}
