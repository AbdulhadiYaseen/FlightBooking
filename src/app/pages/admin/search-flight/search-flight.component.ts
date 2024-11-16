import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { SenderService } from '../../../sender.service';
import { API } from '../../../Services/abc.services';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrl: './search-flight.component.css'
})
export class SearchFlightComponent implements OnInit {


  airports: any = [];
  classes: string[] = ["Economy", "Business", "First"];
  selectedValue: string = "1";
  departureAirport: string = "";
  arrivalAirport: string = "";

  numberOfTravellers: number = 0;
  class: string = "";
  ticketPrice: number = 0;
  distance: number = 0;

  today: Date = new Date();
  departDate: string = "";
  arriveDate: string = "";

  isLoading: boolean = false;

  constructor(
    private router: Router,
    private service: SenderService,
    private api: API
  ) { }
  ngOnInit() {
    this.getAllAirports();
  }
  
  getAllAirports() {
    this.api.getAllAirports().subscribe((res: any) => {
      this.airports = res.data;
    });
  }

  calculateTicketPrice() {
    this.api.getTicketPrice(this.departureAirport, this.arrivalAirport).subscribe(
      (res: any) => {
        
        this.distance = res.distanceNM;
        if (this.class == "Business") {
          this.ticketPrice = 120 + Number(res.ticketPrice);
        }
        else if (this.class == "First") {
          this.ticketPrice = 250 + Number(res.ticketPrice);
        }
        else {
          this.ticketPrice = Number(res.ticketPrice);
        }
        this.performTask();
        this.service.departureAirport = this.departureAirport;
        this.service.arrivalAirport = this.arrivalAirport;
        this.service.departDate = this.departDate;
        this.service.arriveDate = this.arriveDate;
        this.service.numberOfTravellers = this.numberOfTravellers;
        this.service.class = this.class;
        this.service.ticketPrice = this.ticketPrice;
        this.isLoading = false;
        this.router.navigate(["/book-flights"])
      },
      (error: any) => {
        console.error('Error fetching ticket price:', error);
      }
    )
  }


  async wait(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  async performTask() {
    await this.wait(15000);
  }

  onChange(event: MatRadioChange) {
    this.selectedValue = event.value;
  };

  searchFlights() {
    this.isLoading = true;
    this.calculateTicketPrice();
  };
}
