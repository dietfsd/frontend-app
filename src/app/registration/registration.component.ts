import { Component } from '@angular/core';
import {Student} from '../student';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private http:HttpClient){}
  public mystudent:Student= new Student();
  resMessage:any="";

  stuSubmitt(){
    console.log("clicked button");
      
console.log(this.mystudent);
    let res = this.http.post(
      "http://localhost:1234/stu/add",
      this.mystudent,
      {responseType:'text' as 'json'}
    );

    res.subscribe(
      data=>{
        console.log(data);
        this.resMessage=data
        this.mystudent = new Student();
        
      }
    );
  }
}
