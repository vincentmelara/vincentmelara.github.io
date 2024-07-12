import { Component } from '@angular/core';
import { Store, StoreModule, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CheckboxFeatureModule } from './checkbox-feature.module';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    CheckboxModule, 
    FormsModule,
    CheckboxFeatureModule
   ],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  constructor() {
  }

}
