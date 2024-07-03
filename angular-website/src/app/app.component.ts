import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { SkillsComponent } from './skills/skills.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet, 
      HomePageComponent, 
      HeaderComponent, 
      AboutComponent, 
      ProjectsComponent, 
      ContactComponent, 
      SkillsComponent,]
})
export class AppComponent {
  title = 'angular-website';
}
