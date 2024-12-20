import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  public departureAirport: string="";
  public arrivalAirport: string="";
  public departureCountry: string="";
  public arrivalCountry: string="";
  public departDate: string = "";
  public arriveDate: string = "";
  public numberOfTravellers: number = 0;
  public class: string = "";
  public ticketPrice: number = 0;

  public title:string="";
  public firstName:string="";
  public lastName:string="";
  public gender:string="";
  public DOB:string="";
  public nationality:string="";
  constructor() { }
}
