import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared-folder/shared-folder.module";
import { SharedFolderComponent } from "./shared-folder/shared-folder.component";
import { HeaderComponent } from "./shared-folder/header.component";
import { FooterComponent } from "./shared-folder/footer.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ContactsComponent } from "./contacts/contacts.component";
@NgModule({
  declarations: [
    AppComponent,
    SharedFolderComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([
      { path: "register", component: RegisterComponent },
      { path: "login", component: LoginComponent },
      { path: "contacts", component: ContactsComponent },
      { path: "", redirectTo: "/", pathMatch: "full" },
      { path: "**", redirectTo: "/", pathMatch: "full" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
