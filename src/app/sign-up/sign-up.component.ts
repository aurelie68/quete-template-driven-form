import { Component } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})





export class SignUpComponent {
  model: User = new User ("", "", "","")
  constructor() {}
  
onSubmit(){
 
console.log(this.model);
}}

export class User{
  constructor(
    public firstname:string,
    public lastname:string,
    public email:string,
    public password:string
  ){}
  
  }
  
       



