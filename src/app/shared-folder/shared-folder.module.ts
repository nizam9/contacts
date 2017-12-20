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
import {
  FormsModule,
  // FormGroupDirective,
  // FormControl,
  // NgForm,
  // Validators
} from "@angular/forms";
// import { ErrorStateMatcher } from "@angular/material/core";
import { CommonModule } from "@angular/common";
// This Module's Components
// import { SharedFolderComponent } from "./shared-folder.component";

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
    // FormGroupDirective,
    // FormControl,
    // NgForm,
    MatOptionModule,
    MatSelectModule,
    // Validators,
    // ErrorStateMatcher
  ],
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    // FormGroupDirective,
    // FormControl,
    // NgForm,
    MatOptionModule,
    MatSelectModule,
    // Validators,
    // ErrorStateMatcher
  ]
})
export class SharedModule {}
