import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';




@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CardModule,
    PanelModule, 
    ButtonModule,
    FormsModule, 
    InputTextModule, 
    InputTextareaModule
    
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
