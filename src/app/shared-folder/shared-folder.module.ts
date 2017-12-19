// Angular Imports
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

// This Module's Components
import { SharedFolderComponent } from './shared-folder.component';

@NgModule({
    imports: [
      BrowserAnimationsModule, MatButtonModule, MatCheckboxModule
    ],
    declarations: [
        SharedFolderComponent,
    ],
    exports: [
        SharedFolderComponent, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule
    ]
})
export class SharedModule {
}
