import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  register(regfrom:NgForm){
    console.log(regfrom.value.Firstname);
    console.log(regfrom.value.Lastname);
    console.log(regfrom.value.Email);


  }
}
