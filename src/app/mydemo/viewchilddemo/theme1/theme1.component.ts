import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-theme1',
  templateUrl: './theme1.component.html',
  styleUrls: ['./theme1.component.css']
})
export class Theme1Component implements OnInit {

  @ViewChildren('name' ) name:QueryList<ElementRef>;
  @ViewChildren('email' ) email:QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit(){
  this.name.forEach(name1=>{
    name1.nativeElement.style.color="white";
    name1.nativeElement.style.backgroundColor="red";
  });

  this.email.forEach(email1=>{
    email1.nativeElement.style.color="white";
    email1.nativeElement.style.backgroundColor="black";
  });
  }
}
