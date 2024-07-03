import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    TagModule,
    NgFor,
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'];
}
