import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class MetaDataService {

  private options: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType: 'json';
    withCredentials?: boolean;
  } = {
      observe: 'body',
      responseType: 'json',
      headers: {}
    };

  constructor(
    private httpClient: HttpClient
  ) { }

  private buildHeaders(headers?: any) {
    let finalHeaders;
    if (headers) {
      finalHeaders = headers;
    } else {
      finalHeaders = {};
    }
    return finalHeaders;
  }

  public get(url: string, headers?: any): Observable<any> {
    this.options.headers = this.buildHeaders(headers);
    return this.httpClient.get(url, this.options);
  }

  public post(url: string, data: any, headers?: any): Observable<any> {
    const headersToBeSent = this.buildHeaders(headers);
    headersToBeSent['Content-Type'] = 'application/json';
    this.options.headers = headersToBeSent;
    return this.httpClient.post(url, data, this.options);
  }

  public postAction(url: string, data: any, headers?: any): Observable<any> {
    const headersToBeSent = this.buildHeaders(headers);
    headersToBeSent['Content-Type'] = 'application/json';
    this.options.headers = headersToBeSent;
    return this.httpClient.post(url, data, this.options);
  }

  public put(url: string, data: any, headers?: any): Observable<any> {
    const headersToBeSent = this.buildHeaders(headers);
    headersToBeSent['Content-Type'] = 'application/json';
    this.options.headers = headersToBeSent;
    return this.httpClient.put(url, data, this.options);
  }

  public delete(url: string, headers?: any): Observable<any> {
    const headersToBeSent = this.buildHeaders(headers);
    this.options.headers = headersToBeSent;
    return this.httpClient.delete(url, this.options);
  }
}
