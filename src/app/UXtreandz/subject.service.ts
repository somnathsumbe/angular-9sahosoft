import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private _http:HttpClient) { }

  // stap 2 create variable useing Subject or  BehaviorSubject and import also used for cross communication used 

  //  username = new Subject();

  //  we can used BehaviorSubject for initial  value set
  username = new BehaviorSubject("somnath Sumbe");
}
