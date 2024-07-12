import { CheckboxFeatureModule } from './../checkbox/checkbox-feature.module';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxComponent } from "../checkbox/checkbox.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [CommonModule, 
      RouterModule, 
      ButtonModule, 
      CheckboxFeatureModule,
      CheckboxComponent]
})
export class HeaderComponent {
  buttons = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Projects', route: '/projects' },
    { label: 'Skills', route: '/skills' },
    { label: 'Contact', route: '/contact' }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  checkboxes: [
    { id: '1'; checked: true; },
    { id: '2'; checked: false; },
    { id: '3'; checked: true; }
  ] | undefined
}
