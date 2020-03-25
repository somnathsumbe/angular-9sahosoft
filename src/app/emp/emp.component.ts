import { Component, OnInit } from '@angular/core';
import { Hello } from '../hello';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
  preserveWhitespaces:true,
})
export class EmpComponent implements OnInit {

  constructor(public hello:Hello){
    // console.log("I am app emp component ");
    hello.display();
  }

  ngOnInit(): void {
  }

}
