import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
    ) { }

    /* Api danh mục tin tức  */
    getNewsCategory(queryParams: any): Observable<any> { 
        return this.http.get(`https://hhq.somee.com/api/NewsCategory?`+ queryParams)
    }

    deleteCategory(queryParams: any): Observable<any> {
        return this.http.delete(`https://hhq.somee.com/api/NewsCategory/${queryParams}`)
    }

    postCategory(queryParams:any): Observable<any> {
      return this.http.post(`https://hhq.somee.com/api/NewsCategory`, queryParams )
    }
    /* Api quản lí tin tức */ 

    getNews(queryParams: any): Observable<any> {
      return this.http.get(`https://hhq.somee.com/api/News?`+ queryParams)
    }

    /* Api thư viện */

    getLibrariesFolder(): Observable<any> {
      return this.http.get(`https://hhq.somee.com/api/Library/GetLibrariesFolder`)
    }

    getLibrariesFile(Id: string) : Observable<any> {
      return this.http.get(`https://hhq.somee.com/api/Library/GetLibrariesFile?folderId=${Id}`)
    }
}
