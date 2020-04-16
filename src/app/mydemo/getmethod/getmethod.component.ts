import { Component, OnInit } from '@angular/core';
import { Books1 } from './books1';
import { BookinmemoryService } from './bookinmemory.service';

@Component({
  selector: 'app-getmethod',
  templateUrl: './getmethod.component.html',
  styleUrls: ['./getmethod.component.css']
})
export class GetmethodComponent implements OnInit {
  //stap 7 create variable to store  service data & mantion type as Books1[] adn import type
softbooks:Books1[]

//stap 8 add and import  BookinmemoryService
  constructor( private bookService:BookinmemoryService) { }

  ngOnInit(): void {
    this.getsoftbook();
  }
  //stap 9  featch data with help of function getsoftbook()
getsoftbook(){
  //stap 10  subscribe data to method retuen to create variables 
  this.bookService.getBooksFromApi().subscribe((books)=>{
    this.softbooks=books;
  })
}
}
