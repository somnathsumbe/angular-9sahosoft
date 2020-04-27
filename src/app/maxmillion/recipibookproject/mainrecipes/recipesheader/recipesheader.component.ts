import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
selector: 'app-recipesheader',
templateUrl: './recipesheader.component.html',
styleUrls: ['./recipesheader.component.css']
})
export class RecipesheaderComponent implements OnInit {
@Output() featureSelected =new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature:string){
  this.featureSelected.emit(feature)

  }
  }
