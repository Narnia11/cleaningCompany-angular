import { Component, Input } from '@angular/core';
import { Services } from 'src/app/services.model';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {

@Input() service!:Services

serviceList:string[]=[
  "Tvätt- och putsning av fönster",
  "Rengöring av fönsterkarmar",
  "Dammsugning i alla rum",
  "Dammtorkning i alla utrymmen",
  "Tömning av papperskorgar",
  "Putsning av speglar",
  "Rengöring av dusch och toalett",
  "Rengöring av fläkt och filter",
  "Svabbning av golv",
  "Rengöring av alla vitvaror"
]

}
