import {Component, OnInit} from '@angular/core';
import {Reservation} from "../models/reservation";
import {ReservationService} from "../reservation/reservation.service";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit{

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  // So in Ngoninit we take our reservation service, we call the asynchronous getReservations method,
  // which is sending a request to our backend API which returns an Observable.
  // We are subscribing to that observable and once it's done so, once the observable has completed, for
  // example, we can get the returned value, which could be our reservations and then we create an error
  // function, take these reservations from the actual response and then put it as the value of our reservations
  // property.
  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(reservations => {
      this.reservations = reservations
    });
  }

  deleteReservation(id: string){
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("Delete request got processed")
    });
  }

}
