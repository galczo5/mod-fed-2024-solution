import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import {Chart1Component} from "./chart1.component";
import {Chart2Component} from "./chart2.component";
import {Chart3Component} from "./chart3.component";
import {Chart4Component} from "./chart4.component";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, Chart1Component, Chart2Component, Chart3Component, Chart4Component],
  selector: 'mfe2-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mfe2';
}
