import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  moduleId: module.id,
  selector: "app-my-dialog",
  templateUrl: "add-contacts.component.html",
  styleUrls: ["add-contacts.component.css"]
})
export class AddContactsComponent implements OnInit {
  constructor(
    public thisDialogeRef: MatDialogRef<AddContactsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onAddContact(det: any): void {
    console.log(det);
  }

  ngOnInit() {}
}
