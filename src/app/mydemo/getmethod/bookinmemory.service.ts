import {
  Injectable
} from '@angular/core';
// stap1 add http
import {
  HttpClient
} from '@angular/common/http';
// stap2 add http
import {
  Observable
} from 'rxjs';
import {
  Books1
} from './books1';

@Injectable({
  providedIn: 'root'
})
export class BookinmemoryService {
  // stap3 add url
  // stap4 find data types and create interface Books1
  bookUrl = "https://jsonplaceholder.typicode.com/posts"
  // stap6 HttpClient
  constructor(private http: HttpClient) {

  }
  // stap6 create get method
  //type Observable<Books1[]> this is Books1[] intrface type goto component file
  getBooksFromApi(): Observable < Books1[] > {
    return this.http.get < Books1[] > (this.bookUrl)
  }


  // CreateBooksFromApi(book:book):Observable<book> {
  //   let httpHeaders=new httpHeaders(){
  //     .set('Content-Type', 'application/Json')
  //     let options={
  //       header:httpHeaders
  //     };
  //     return this.http.post<Books1[]>(this.bookUrl,book ,options);
  //   }
  // }
}
