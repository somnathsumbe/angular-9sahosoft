import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
// import { catchError } from "rxjs/operator";

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: "563492ad6f91700001000001e3010844c89348408fefff1e6c18c432",
  }),
};

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getdata(search, perPage): Observable<any> {
    debugger;
    console.log(search + "" + perPage);
    const url =
      "https://api.pexels.com/v1/search?query="+search +"&perPage="+perPage
    return this.http
      .get<any>(url, httpOptions)
      // .pipe(catchError(this.handleError));
  }
  // handleError(error) {
  //   return throwError(error.massage || "Searve Error")
  // }
}
