import { Component, OnInit } from '@angular/core';
import { Wonder } from '../wonder.model';
import { WondersService } from '../wonders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wonders-details',
  standalone: true,
  imports: [],
  templateUrl: './wonders-details.component.html',
  styleUrl: './wonders-details.component.css'
})
export class WondersDetailsComponent implements OnInit {
  wonder:Wonder = {id: 0, name: '', description: '', image: ''};
  wonderId: number = 0;

  constructor (private wondersService: WondersService,
    private route: ActivatedRoute
  ){}

 ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.wonderId = params['id'];
    this.wonder = this.wondersService.getWonderById(this.wonderId-1);
  });
 }
}
