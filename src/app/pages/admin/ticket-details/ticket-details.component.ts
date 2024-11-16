import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SenderService } from '../../../sender.service';
import { MatRadioChange } from '@angular/material/radio';
import { ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';
import { Height } from '@mui/icons-material';



@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css',
})
export class TicketDetailsComponent {


  extraBaggage: boolean = false;
  specialMeal: boolean = false;
  departureAirport: string = this.service.departureAirport;
  arrivalAirport: string = this.service.arrivalAirport
  departDate: string = "8/20/2024";
  arriveDate: string = "8/14/2024";
  numberOfTravellers = 2;
  class: string = "Business";
  // price: number = 1000;
  totalPrice: number = this.service.ticketPrice;

  title: string = "";
  firstName: string = "";
  lastName: string = "";
  gender: string = "";
  DOB: string = "";
  nationality: string = "";
  selectedBaggage: boolean = false;
  selectedMeal: boolean = false;


  constructor(
    private router: Router,
    private service: SenderService,
    private dialog: MatDialog
  ) { }

  openDialog() {
    this.dialog.open(DetailsDialogComponent, {

      width: '700px',
      height: '650px',
      panelClass: 'custom-dialog-container',
    });
  }


  calculateUpdatedBaggaePrice(event: any) {

    if (event.checked) {
      this.totalPrice += 20.00;
    } else {
      this.totalPrice -= 20.00;
    }
  }

  calculateUpdatedMealPrice(event: any) {

    if (event.checked) {
      this.totalPrice += 20.00;
    } else {
      this.totalPrice -= 20.00;
    }
  }

  confirmTicket() {
    this.service.title = this.title;
    this.service.firstName = this.firstName;
    this.service.lastName = this.lastName;
    this.service.gender = this.gender;
    this.service.DOB = this.DOB;
    this.service.nationality = this.nationality;
    this.router.navigate(["/ticket"]);
  }
}


