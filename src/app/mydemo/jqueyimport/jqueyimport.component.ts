import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-jqueyimport',
  templateUrl: './jqueyimport.component.html',
  styleUrls: ['./jqueyimport.component.css']
})
export class JqueyimportComponent implements OnInit {

  constructor() { 

    $(document).ready(function(){
      $("button").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
      });
    });
    
  }

  ngOnInit(): void {
  }

}
