import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: "register.component.html",
  styleUrls: ["register.component.css"]
})
export class RegisterComponent {

first_name: String;
last_name: String;
email: String;
mobile: Number;
city: String;
pincode: Number;

  onRegister(value: any): void {
    console.log(value);
  }

  constructor(private _router: Router) {}
  onbackClick(): void {
    this._router.navigate(["/login"]);
  }
}
