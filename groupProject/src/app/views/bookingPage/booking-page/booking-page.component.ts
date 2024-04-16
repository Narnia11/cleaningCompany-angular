import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Booking } from 'src/app/booking.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent {
  bookingList: Booking[] = []
  uncompleted!: Booking[]
  completed !: Booking[]

  constructor(private http: HttpClient) { }

  fetchBooking() {
    this.http.get<Booking[]>("./assets/mockdata.json")
      .subscribe((res: Booking[]) => {
        this.bookingList = res.sort((a: any,b: any)=> {
          return new Date(a.datum) .getTime() - new Date(b.datum) .getTime()
        }) 
        this.uncompleted = this.bookingList.filter(n => n.status === false)
        this.completed = this.bookingList.filter(n => n.status === true)
        console.log(this.uncompleted)
      })
  }

  ngOnInit() {
    this.fetchBooking()
  }

  insertToUnCompleteTable(newItem: Booking) {
    this.uncompleted.push(newItem);
    this.bookingList.push(newItem);
    this.uncompleted = this.uncompleted.sort((a: any,b: any)=> {
      return new Date(a.datum) .getTime() - new Date(b.datum) .getTime()
    }) 
    this.bookingList = this.bookingList.sort((a: any,b: any)=> {
      return new Date(a.datum) .getTime() - new Date(b.datum) .getTime()
    }) 

    console.log(this.uncompleted)
    console.log(this.bookingList);
    
  }
}
