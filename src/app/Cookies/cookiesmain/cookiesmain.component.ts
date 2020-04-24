import {
  Component,
  OnInit
} from '@angular/core';
import {
  CookieService
} from 'ngx-cookie-service';

@Component({
  selector: 'app-cookiesmain',
  templateUrl: './cookiesmain.component.html',
  styleUrls: ['./cookiesmain.component.css']
})
export class CookiesmainComponent implements OnInit {
  cookies1:any;
  cookies2:any;
  constructor(private _CookieService: CookieService) {}

  ngOnInit(): void {}





  setCookies() {

this._CookieService.set('myname', "somnath sumbe");
 this._CookieService.set('wifename', "sunita sumbe");


  }


  GetCookies() {
    console.log(this._CookieService.get('myname'));
    console.log(this._CookieService.get('wifename'));
    console.log(this._CookieService.getAll());

    this.cookies1= this._CookieService.get('myname');
    this.cookies2= this._CookieService.get('wifename');
  }

  delete(){
  this._CookieService.delete('myname');
  alert("Delete 1 cookie");
  }

  deleteAll(){
    this._CookieService.deleteAll();
    alert("Delete All Cookies");
  }
}
