import { Component, Input } from '@angular/core';
import { Cards } from 'src/app/testimonial.model';
@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.css']
})
export class TestimonialCardComponent {
  @Input() card!: Cards
  @Input() avatar! : string;
}
