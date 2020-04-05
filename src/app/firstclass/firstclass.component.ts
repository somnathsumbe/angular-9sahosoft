import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstclass',
  templateUrl: './firstclass.component.html',
  styleUrls: ['./firstclass.component.css']
})
export class FirstclassComponent implements OnInit {
title="welcome angular 9";
name="somnath";
city="Ahmednagar";
num1=20;
num2=40;
  constructor() { }

  ngOnInit(): void {
  }

}
