import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  encapsulation:ViewEncapsulation.None,
  inputs:['Pdata']
})
export class StudentComponent implements OnInit {
Pdata:any;
  constructor() { }

  ngOnInit(): void {
  }

}
