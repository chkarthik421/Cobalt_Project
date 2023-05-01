import { Component,ViewChild ,ViewEncapsulation } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

employees = [
  { empid:1,firstName:"chebodula",lastName:"karthik",gender:"male",salary:15000,DOB:"12-09-1989"},
  { empid:2,firstName:"alajangi",lastName:"mounika",gender:"female",salary:10000,DOB:"05-10-2000"},
  { empid:3,firstName:"neradabilli",lastName:"srinu",gender:"male",salary:30000,DOB:"01-10-1972"},
  { empid:4,firstName:"namana",lastName:"sankar",gender:"male",salary:20000,DOB:"06-08-1984"}
  ];


}


