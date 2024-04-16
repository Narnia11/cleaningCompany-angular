import { Component, Input } from '@angular/core';
import { Booking } from 'src/app/booking.model';


@Component({
  selector: 'app-bookings-tables',
  templateUrl: './bookings-tables.component.html',
  styleUrls: ['./bookings-tables.component.css']
})
export class BookingsTablesComponent {
  @Input() uncompletedBooking: Booking[] = []
  @Input() completedBooking!: Booking[];
  @Input() bookingList!: Booking[];

  selectedBookings: any[] = [];


  deleteBooking(booking: Booking) {
    this.uncompletedBooking.splice((this.uncompletedBooking.indexOf(booking)), 1);
    this.bookingList.splice((this.bookingList.indexOf(booking)), 1);

    console.log(this.uncompletedBooking);
    console.log(this.bookingList);
  }

  selectBooking(event: Event, booking: object) {
    if ((event.target as HTMLInputElement).checked) {
      this.selectedBookings.push(booking);
    }
  }

  deleteSelected() {
    this.completedBooking = this.completedBooking.filter(
      b => !this.selectedBookings.includes(b)
    );
    this.bookingList = this.bookingList.filter(
      b => !this.selectedBookings.includes(b)
    );
    console.log(this.completedBooking);
    console.log(this.bookingList);
  }
}

