import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    let url: string;
    if (!environment.production) {
      url = './assets/db.json';
    } else {
      url = environment.apiBasePath + 'products';
    }
    console.log(url);
    return this.httpClient.get(url) as Observable<Product[]>;
  }
}
