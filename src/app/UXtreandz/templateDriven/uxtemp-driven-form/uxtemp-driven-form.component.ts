import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-uxtemp-driven-form',
  templateUrl: './uxtemp-driven-form.component.html',
  styleUrls: ['./uxtemp-driven-form.component.css']
})
export class UxtempDrivenFormComponent implements OnInit {
@ViewChild('myform') myForm=NgForm;
  constructor() { }
  selectDefault='javascript';
  ngOnInit(): void {
  }
  onSubmit(){
    // console.log('onSubmit');
    // console.log(myform);
    // console.log(myform.value);
    console.log(this.myForm);
  }
}
