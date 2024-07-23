import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WondersListComponent } from './wonders-list/wonders-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WondersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Чудеса света';
}
