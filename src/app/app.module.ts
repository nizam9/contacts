import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatDialogModule } from "@angular/material";
import { MatTooltipModule } from "@angular/material/tooltip";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared-folder/shared-folder.module";
import { SharedFolderComponent } from "./shared-folder/shared-folder.component";
import { HeaderComponent } from "./shared-folder/header.component";
import { FooterComponent } from "./shared-folder/footer.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { AddContactsComponent } from "./contacts/add-contacts/add-contacts.component";

@NgModule({
  declarations: [
    AppComponent,
    SharedFolderComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ContactsComponent,
    AddContactsComponent

  ],
  imports: [
    BrowserModule,
    SharedModule,
    MatDialogModule,
    MatTooltipModule,
    RouterModule.forRoot([
      { path: "register", component: RegisterComponent },
      { path: "login", component: LoginComponent },
      { path: "contacts", component: ContactsComponent },
      { path: "", redirectTo: "/", pathMatch: "full" },
      { path: "**", redirectTo: "/", pathMatch: "full" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddContactsComponent]
})
export class AppModule {}
