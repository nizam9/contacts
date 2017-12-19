// Angular Imports
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from "@angular/common";
// This Module's Components
import { SharedFolderComponent } from "./shared-folder.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule
  ],
  declarations: [SharedFolderComponent],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class SharedModule {}
