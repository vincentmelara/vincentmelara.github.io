import { Component } from '@angular/core';
import  { Card, CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
