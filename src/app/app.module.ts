
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { SharedModule } from './shared-folder/shared-folder.module';
console.log(SharedModule);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SharedModule , BrowserAnimationsModule, MatButtonModule, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
