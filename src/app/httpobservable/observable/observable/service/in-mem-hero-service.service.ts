import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../interface/books';

@Injectable({
  providedIn: 'root'
})
export class InMemHeroServiceService {
  private grtUrl = "/api/BookDetails"
  constructor(private _http: HttpClient) { }

  getDetails(): Observable<Books[]> {
    return this._http.get<Books[]>(this.grtUrl);

  }

  getBookid(bookid: number): Observable<Books> {
    return this._http.get<Books>(this.grtUrl + "?id"+bookid);
  }



}
