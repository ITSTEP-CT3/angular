import { Component, OnInit } from '@angular/core';
import { FamousPersonService } from '../famous-person.service';

@Component({
  selector: 'app-famous-person',
  standalone: true,
  imports: [],
  templateUrl: './famous-person.component.html',
  styleUrl: './famous-person.component.css'
})
export class FamousPersonComponent implements OnInit{
  person: any;

  constructor(private personService: FamousPersonService){}

  ngOnInit(): void {
    this.person = this.personService.getFamousPerson();
  }
}
