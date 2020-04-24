import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookieschild',
  templateUrl: './cookieschild.component.html',
  styleUrls: ['./cookieschild.component.css']
})
export class CookieschildComponent implements OnInit {
  cookies1:any;
  cookies2:any;
  shivanshobject:any= {};

  constructor(private _CookieService: CookieService) { }

  ngOnInit(): void {
  }

  GetCookies() {
    console.log(this._CookieService.get('myname'));
    console.log(this._CookieService.get('wifename'));
    console.log(this._CookieService.getAll());

    this.cookies1= this._CookieService.get('myname');
    this.cookies2= this._CookieService.get('wifename');
  }

  CheckCookies(){
    // if(this._CookieService.check("myname")==true) another ways
    if(this._CookieService.check("myname")){
      alert("Myname cookie is Avilable ");
    }
    else{
      alert("Not Exist")
    }
  }

  setObject(){
    let family=[
      {name:"shivansh", age:3, Dist:'Pune', state:'Maharashtra'},
      {name:"swaraj", age:5, Dist:'Pune', state:'Maharashtra'}
    ];
    this._CookieService.set("key",JSON.stringify(family));
  }

  getObject(){
 console.log(JSON.parse(this._CookieService.get("key")));
this.shivanshobject = JSON.parse(this._CookieService.get("key"));
console.log(this.shivanshobject);
  }
}
