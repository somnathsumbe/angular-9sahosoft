import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UxproductsService {
  url = 'https://uxproduct-558b4.firebaseio.com/products.json'
  urlDataTitle = 'https://uxproduct-558b4.firebaseio.com/dataTitle.json';
  constructor(private _http: HttpClient) {}

  private headers = new HttpHeaders({
    'Content-Type': 'appliation/json'
  });
  // private headers=new HttpHeaders({'Content-Type': 'Somnath/json'});//custome Header
  saveProducts(products: any[]) {
    //  return this._http.post(this.url,products);
    return this._http.put(this.url, products, {
      headers: this.headers
    });
  }


  featchProducts() {
    //  return this._http.post(this.url,products);
    return this._http.get(this.url);
  }

  getDataTitle() {
    return this._http.get(this.urlDataTitle);
  }

  onEditProduct(id) {
    console.log('https://uxproduct-558b4.firebaseio.com/products/'+id+'.json');
        return this._http.delete('https://uxproduct-558b4.firebaseio.com/products/'+id+'.json');
      }
  deleteProduct(id) {
console.log('https://uxproduct-558b4.firebaseio.com/products/'+id+'.json');
    return this._http.delete('https://uxproduct-558b4.firebaseio.com/products/'+id+'.json');
  }


  updateProduct(id) {
    console.log('https://uxproduct-558b4.firebaseio.com/products/'+id+'.json');
        return this._http.delete('https://uxproduct-558b4.firebaseio.com/products/'+id+'.json');
      }
    
}
