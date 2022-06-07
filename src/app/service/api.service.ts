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
        return this.http.get(`https://hhq.somee.com/api/NewsCategory?${queryParams}`)
    }
}
