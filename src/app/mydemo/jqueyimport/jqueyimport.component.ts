import {
  Component,
  OnInit
} from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-jqueyimport',
  templateUrl: './jqueyimport.component.html',
  styleUrls: ['./jqueyimport.component.css']
})
export class JqueyimportComponent implements OnInit {

  constructor() {

    $(document).ready(function () {

      $('#status').keyup(function () {
        var len = $('#status').val().length;

        if (len<1){
          $('#first').text("");
          $('#first').removeClass("bg-warning bg-success bg-danger");
        }
        else if (len <= 4) {
          $('#first').text("Weak");

          $('#first').addClass("bg-danger");
          $('#first').removeClass("bg-warning bg-success");
        } else if (len <= 8) {
          $('#first').text("Good");
          $('#first').addClass("bg-warning");
          $('#first').removeClass("bg-danger bg-success");
        } else {
          $('#first').text("Strong");
          $('#first').addClass("bg-success");
          $('#first').removeClass("bg-warning bg-danger");
        }
      })

      var value = $('#list').val();
      $('#bodyColorChange').css("background",value);

      $('#list').change(function () {
        var value = $('#list').val();
        $('#bodyColorChange').css("background",value);


      })


      $('#liveevent').click(function () {
        alert();
        $(this).after("<P>Somnath Sumbe</p>");
      })


      

      $('body').find(".soma").css('background' ,"blue");

      $('li.one').each(function(){
        $('li.one') .css('background' ,"red");
      })


      $('#loadfile').load("https://www.w3schools.com/html/html_filepaths.asp");
    });

  }

  ngOnInit(): void {}

}
