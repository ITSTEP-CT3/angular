import { Component } from '@angular/core';

@Component({
  selector: 'app-strange-hobby',
  standalone: true,
  imports: [],
  templateUrl: './strange-hobby.component.html',
  styleUrl: './strange-hobby.component.css'
})
export class StrangeHobbyComponent {
  hobbyName: string = "Мегастранный";
  hobbyDescription: string = "Мое красочное описание этого хобби";

  hobbyImage: string = "assets/volga.jpg";
  famousImage: string = "assets/IMG_5161-1.jpg";
}