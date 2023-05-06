import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  flag:boolean=false;
  isValid:boolean=false;
  email:any;
  pwd:any;

  show(){
    if((this.email.valid=this.isValid) && (this.pwd.valid=this.isValid)){
      this.flag=true;
      
    }
    else{
      this.flag=false;
      
    }
  }
// show(fn:any,pwd:any){
//   console.log(fn);
//   console.log(pwd);
  
// }
}
