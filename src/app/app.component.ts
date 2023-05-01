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

///////Interpolation and Property Binding /////////
myText: string = 'Karthik';
imagePath : string="./assets/chebodula.jpg";

isDisabled: boolean = false;

name: string = 'Karthik';

a:number=24;
b:number=18;

flag:boolean = false;
f1(){
  alert("I am f1")
}



add(num1:any,num2:any){
  alert(Number(num1)+Number(num2));
}
//flag:boolean = true;
myClasses = {
  class1 : true,
  class2 : false,
  class3 : true
} 
myFunction(){
  return this.myClasses;
}

num:number=6;

myStyles = {
  'background-color': 'lime',
  'font-size': '20px',
  'border': '5px dotted red',
  'padding':'20px'
}
myFunction1(){
return this.myStyles;
}

//flag:boolean=false;
fun1(){
  this.flag=!this.flag;
}
 
public n:any=prompt("Enter Your Number:");

}


