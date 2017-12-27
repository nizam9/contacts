import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { AddContactsComponent } from "./add-contacts/add-contacts.component";
@Component({
  moduleId: module.id,
  templateUrl: "contacts.component.html",
  styleUrls: ["contacts.component.css"]
})
export class ContactsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  dialougeResult: String;
  position = 'below';
  ngOnInit() {}

  addConatct(): void {
    const dialogRef = this.dialog.open(AddContactsComponent, {
      width: "750px",
      height: "300px",
      disableClose: true,
      data: "helloo World !"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed : ${result}`);
      this.dialougeResult = result;
    });
  }
}
