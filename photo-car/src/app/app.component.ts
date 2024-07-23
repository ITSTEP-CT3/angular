import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StrangeHobbyComponent } from './strange-hobby/strange-hobby.component';
import { FamousPersonComponent } from './famous-person/famous-person.component';
import { HobbyComponent } from './hobby/hobby.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StrangeHobbyComponent, FamousPersonComponent, HobbyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Странное хобби';
}
