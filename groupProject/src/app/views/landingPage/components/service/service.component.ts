import { Component, Input } from '@angular/core';
import { Services } from 'src/app/services.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  @Input() services : Services[]=[
    new Services("Diamantstädning","fa-gem"),
    new Services("Toppstädning","fa-star"),
    new Services("Basic städning","fa-broom"),
    new Services("Fönstertvätt","fa-hand-sparkles"),

  ]
}
