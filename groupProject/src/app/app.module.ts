import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/landingPage/landing-page/landing-page.component';
import { ServiceComponent } from './views/landingPage/components/service/service.component';
import { TestimonialComponent } from './views/landingPage/components/testimonial/testimonial.component';
import { HeroComponent } from './views/landingPage/components/hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './generalComponents/button/button.component';
import { BookingPageComponent } from './views/bookingPage/booking-page/booking-page.component';
import { BookingsTablesComponent } from './views/bookingPage/components/bookings-tables/bookings-tables.component';
import { FormComponent } from './views/bookingPage/components/form/form.component';
import { MainComponent } from './main/main.component';
import { ServiceCardComponent } from './views/landingPage/components/service/service-card/service-card.component';
import { ListComponent } from './views/landingPage/components/service/list/list.component';

import { TestimonialCardComponent } from './views/landingPage/components/testimonial/testimonial-card/testimonial-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';


const rout: Routes = [
  {path: '', redirectTo: 'Main', pathMatch: 'full'},
  {path: 'Main', component: LandingPageComponent},
  {path: 'Main/Booking', component: BookingPageComponent},
  {path: '**', component: ErrorComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ServiceComponent,
    TestimonialComponent,
    HeroComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    BookingPageComponent,
    BookingsTablesComponent,
    FormComponent,
    MainComponent,
    ServiceCardComponent,
    ListComponent,

    TestimonialCardComponent,
      ErrorComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
