import { Component } from '@angular/core';
import { Cards } from 'src/app/testimonial.model';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  cardArr: Cards[]=[
    new Cards("Lina", "Jag har anlitat Städafint sedan flera år tillbaka och alltid varit mycket nöjd med resultatet. Pålitliga och mycket trevliga.", "avatar-woman1"),
    new Cards("Benjamin", "Blev rekommenderad av en god vän att anlita Städafint för regelbundet underhåll av fönster -ångrar det inte en sekund!", "avatar-male"),
    new Cards("Bianca", "Har anlitat Städafint AB vi flera tillfällen, både vid flytt och övriga tillfällen. Mycket trevlig och noggrann personal.", "avatar-woman2")
  ]
}
