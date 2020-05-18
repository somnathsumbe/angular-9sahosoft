import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mytempform',
  templateUrl: './mytempform.component.html',
  styleUrls: ['./mytempform.component.css']
})
export class MytempformComponent implements OnInit {
mydatas:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }



  onSubmit(myform: NgForm){

this.mydatas.push(myform.value);
console.log(this.mydatas)
myform.reset();
  }
}
