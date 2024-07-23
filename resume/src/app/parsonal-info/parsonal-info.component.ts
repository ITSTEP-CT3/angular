import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import { ExperienceService } from '../experience.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parsonal-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parsonal-info.component.html',
  styleUrl: './parsonal-info.component.css'
})
export class ParsonalInfoComponent implements OnInit {
  fullName:string = "Дронов Александр Сергеевич";
  phone: string = "+79022856609";
  city: string = "Архангельск";

  skills: string[] = [];
  experienceList: {company: string, position: string, years:string}[] = [];

  constructor(private skillsService: SkillsService,
    private experienceService: ExperienceService){}

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
    this.experienceList = this.experienceService.getExperience();
  }
}
