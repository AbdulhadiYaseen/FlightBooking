import { Component } from '@angular/core';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrl: './details-dialog.component.css'
})
export class DetailsDialogComponent {
  
  gender: string="";
  firstName: string="";
  lastName: string="";
  passport: string="";
  contact: string="";
}
