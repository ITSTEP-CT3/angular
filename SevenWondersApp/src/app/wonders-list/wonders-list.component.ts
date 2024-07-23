import { Component } from '@angular/core';
import { Wonder } from '../wonder.model';
import { WondersService } from '../wonders.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wonders-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './wonders-list.component.html',
  styleUrl: './wonders-list.component.css'
})
export class WondersListComponent {
  wonders: Wonder[];

  constructor (private wondersService: WondersService){
    this.wonders = this.wondersService.getWonders();
  }
}
