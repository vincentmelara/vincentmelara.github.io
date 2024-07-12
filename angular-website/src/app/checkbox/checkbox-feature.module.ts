// src/app/checkbox-feature/checkbox-feature.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
// import { checkboxReducer } from '../state/checkbox.reducer';
@NgModule({
  declarations: [
    // any components related to this module
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    // components that need to be accessed from other parts of the app
  ]
})
export class CheckboxFeatureModule {}
