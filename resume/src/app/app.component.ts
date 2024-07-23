import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParsonalInfoComponent } from './parsonal-info/parsonal-info.component';

import { SkillsService } from './skills.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParsonalInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [SkillsService]
})
export class AppComponent {
  title = 'resume';
}
