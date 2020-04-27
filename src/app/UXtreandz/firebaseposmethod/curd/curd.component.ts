import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import {
  User
} from './user.module';
import {
  HttpClient
} from '@angular/common/http';
import {
  map
} from 'rxjs/operators';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent implements OnInit {
  getdata;
  @ViewChild('userForm') userForm = NgForm;
  url = "https://uxproduct-558b4.firebaseio.com/user.json";
  users = [
    // {
    // name: "somnath sumbe",
    // technology: 'Angular 9'
    // },
    // {
    // name: "sunita sumbe",
    // technology: 'ReactJs'
    // },
    // {
    // name: "amol karle",
    // technology: 'ReactJs'
    // },
    // {
    // name: "amol mali ",
    // technology: 'ReactJs'
    // },
    // {
    // name: "rahul shinde",
    // technology: 'ReactJs'
    // }
  ]
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.featchUser();
  }



  onAddUser(userData: User) {
    this.users.push(userData);
    this._http.post < User > (this.url, userData)
      .subscribe((users) => {});
  }


  featchUser() {
    this._http.get < User > (this.url).pipe(map(resData => {
      const userArray = [];
      for (const key in resData) {
        console.log(key);
        console.log(resData[key]);
        if (resData.hasOwnProperty(key)) {
          userArray.push({
            userId: key,
            ...resData[key]
          })
        }

      }
      return userArray
    })).subscribe((users) => {
      this.users = users;
    })
  }

  deleteUser(userId) {
    if (confirm("Do you want Delete this user ?")) {
      this._http.delete('https://uxproduct-558b4.firebaseio.com/user/' + userId + '.json').subscribe((res) => {
this.featchUser();
      })
    }

  }
}
