import { Injectable } from '@angular/core';
import { Wonder } from './wonder.model';

@Injectable({
  providedIn: 'root'
})
export class WondersService {
  private wonders: Wonder[] = 
  [
    {
      id: 1,
      name: 'Пирамида Хеопса', 
      description: 'крупнейшая из египетских пирамид, памятник архитектурного искусства Древнего Египта; единственное из «Семи чудес света», сохранившееся до наших дней, и самое древнее из них: её возраст оценивается примерно в 4500 лет.',
      image: 'Kheops-Pyramid.jpg'
    },
    {
      id: 2,
      name: 'Вися́чие сады́ Семирами́ды',
      description: 'одно из Семи чудес античного мира, которое представляло собой инженерное сооружение в Вавилоне с каскадом многоуровневых садов, где росли многочисленные виды деревьев, кустарников и виноградных лоз, производившее впечатление большой зелёной горы.',
      image: 'Hanging_Gardens_of_Babylon.jpg'
    },
    {
      id: 3,
      name: 'Статуя Зевса в Олимпии',
      description: 'единственное из Семи чудес света, которое располагалось в материковой части Европы (в городе Олимпия). Статуя Зевса в Олимпии — третье чудо света Древнего мира.',
      image: 'Le_Jupiter_Olympien.jpg'
    },
    {
      id: 4,
      name: 'Храм Артеми́ды в Эфе́се',
      description: 'одно из Семи чудес античного мира, греческий храм, посвящённый местному культу богини Артемиды[⇨] (соответствует римской богине Диане).',
      image: 'Temple_of_Artemis.jpg'
    },
    {
      id: 5,
      name: 'Галикарнасский мавзолей',
      description: 'гробница карийского сатрапа Мавсола (греч. Μαύσωλος), сооружённая в середине IV века до н. э. по приказу его супруги Артемисии II в Галикарнасе (ныне — Бодрум, Турция), одно из Семи античных чудес света.',
      image: 'Mausoleum_at_Halicarnassus.jpg'
    },
  ];
  
  getWonders(): Wonder[] {
    return this.wonders;
  }

  getWonderById(id: number) {
    return this.wonders[id];
  }
}
