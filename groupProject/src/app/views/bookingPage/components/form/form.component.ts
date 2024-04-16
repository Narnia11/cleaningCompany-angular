import { Component, EventEmitter, Input, IterableDiffers, Output } from '@angular/core';
import { Booking } from 'src/app/booking.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() addItemToUncom = new EventEmitter<Booking>();
  @Input() bookingList!: Booking[];

  restrictDate!: string;


  constructor(private formBuilder: FormBuilder) { }

  checkoutForm = this.formBuilder.group({
    cleanerChoice: ['', Validators.required],
    cleaningDate: ['', Validators.required],
    cleaningTime: ['', Validators.required],
    service: ['', Validators.required]
  });

  onSubmit(): void {
    if (this.checkoutForm.invalid) {
      alert("Vänligen fyll i hela formuläret innan du bokar din städning!");
      return;
    }

    const filteredBooking = this.bookingList.find(obj => obj.datum === this.checkoutForm.value.cleaningDate)

    if (!filteredBooking) {

      const newUncompleteBook = {
        id: (this.bookingList.length + 1),
        datum: this.checkoutForm.value.cleaningDate!.toString(),
        tid: this.checkoutForm.value.cleaningTime!,
        kund: this.bookingList[0].kund,
        nivå: this.checkoutForm.value.service!,
        städare: this.checkoutForm.value.cleanerChoice!,
        status: false
      }

      this.addItemToUncom.emit(newUncompleteBook);
      this.checkoutForm.reset();

      alert(`Du har bokat en städning ${newUncompleteBook.datum} kl ${newUncompleteBook.tid}`);

    } else {
      alert(`Du har redan en städning inbokad ${this.checkoutForm.value.cleaningDate}. Vänligen välj ett annat datum!`);
    }

  }

  restrictDatePicker() {
    const todaysDate = new Date();

    let monthAddZero = "";
    let dayAddZero = "";

    if (todaysDate.getMonth() <= 8) {
      monthAddZero = "0";
    }
    if (todaysDate.getDate() <= 9) {
      dayAddZero = "0";
    }

    this.restrictDate = `${todaysDate.getFullYear()}-${monthAddZero}${todaysDate.getMonth() + 1}-${dayAddZero}${todaysDate.getDate()}`;
  }

  restrictDateChoice = this.restrictDatePicker();

}
