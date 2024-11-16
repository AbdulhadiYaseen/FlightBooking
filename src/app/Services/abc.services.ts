import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiService } from "./api.services";

@Injectable({
    providedIn: 'root',
})

export class API{
    constructor(private apiService: ApiService ){
        
    }
 
    getAllAirports(){
        const URL = '/getAirports'
        return this.apiService.get(URL);
    }

    getTicketPrice(departureAirport: string, arrivalAirport: string){
        const URL = '/postAirports'
        const body = {
            departureAirport: departureAirport,
            arrivalAirport: arrivalAirport
        };
        return this.apiService.post(URL,body);
    }

}