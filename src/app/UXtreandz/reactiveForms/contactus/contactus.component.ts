import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
myreactiveForm:FormGroup;
  constructor() { }

  ngOnInit(): void {

    this.myreactiveForm=new FormGroup({
      'userDetails':new FormGroup({
        'username':new FormControl(null,Validators.required),
        'email':new FormControl(null ,[Validators.required ,Validators.email]),
      }),

      'course':new FormControl("Angular"),
      'gendar':new FormControl("Male"),
      // 'skills': new FormArray([
      //   new FormControl(null),
      //   new FormControl(null),
      //   new FormControl(null)
      // ])
    })
  }

  onSubmit(){
console.log(this.myreactiveForm);
  }

}
