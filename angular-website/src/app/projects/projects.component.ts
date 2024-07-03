import { CardModule } from 'primeng/card';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NgFor, CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule, 
    NgFor, 
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { name: 'Project One', date: '2024', description: 'Description for project one.' },
    { name: 'Project Two', date: '2023', description: 'Description for project two.' }
  ];
}
