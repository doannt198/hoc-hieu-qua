import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
    ) { }

    /* Api danh mục tin tức  */
    GetNewsCategory(queryParams: any): Observable<any> { 
        return this.http.get(`https://hhq.somee.com/api/NewsCategory?`+ queryParams)
    }

    DeleteCategory(queryParams: any): Observable<any> {
        return this.http.delete(`https://hhq.somee.com/api/NewsCategory/${queryParams}`)
    }

    PostCategory(queryParams:any): Observable<any> {
      return this.http.post(`https://hhq.somee.com/api/NewsCategory`, queryParams )
    }
    /* Api quản lí tin tức */ 

    GetNews(queryParams: any):Observable<any> {
      return this.http.get(`https://hhq.somee.com/api/News?`+ queryParams)
    }
}
