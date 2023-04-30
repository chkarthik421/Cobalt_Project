import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cobalt_Project';

  today: number = Date.now();
  constructor() {
    setInterval(() => {this.today = Date.now()}, 1);
} 
}
