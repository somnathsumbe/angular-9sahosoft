import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit{

  
  // @ViewChild('name' ,{static:true}) name:ElementRef;
  // @ViewChild('email' ,{static:true}) email:ElementRef;

  @ViewChild('name' ) name:ElementRef;
  @ViewChild('email' ) email:ElementRef;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.name.nativeElement.style.color="white";
    this.name.nativeElement.style.backgroundColor="red";

    this.email.nativeElement.style.color="white";
    this.email.nativeElement.style.backgroundColor="black";
  }
}
