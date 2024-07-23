import { Component, OnInit } from '@angular/core';
import { HobbyService } from '../hobby.service';

@Component({
  selector: 'app-hobby',
  standalone: true,
  imports: [],
  templateUrl: './hobby.component.html',
  styleUrl: './hobby.component.css'
})
export class HobbyComponent implements OnInit {

  hobby: any;
  constructor(private hobbyService: HobbyService){}

  ngOnInit(): void {
    this.hobby = this.hobbyService.getHobby();
  }
}
