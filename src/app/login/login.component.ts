import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    // selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    user_name: String;
    password: String;
    onLogin(value: any): void {
    console.log(value);
    alert(value.user_name + value.password);
    }
}
