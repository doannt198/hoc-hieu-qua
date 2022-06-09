import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiHochieuqua } from 'src/environments/environment';
import { Observable } from 'rxjs';
const apiServer = apiHochieuqua.apiBaseHocHieuQua;
@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
    ) { }

    /* Api danh mục tin tức  */
    getNewsCategory(queryParams: any): Observable<any> { 
        return this.http.get(`${apiServer}/api/NewsCategory?`+ queryParams)
    }

    deleteCategory(queryParams: any): Observable<any> {
        return this.http.delete(`${apiServer}/api/NewsCategory/`+ queryParams)
    }

    postCategory(queryParams:any): Observable<any> {
      return this.http.post(`${apiServer}/api/NewsCategory`, queryParams )
    }
    /* Api quản lí tin tức */ 

    getNews(queryParams: any): Observable<any> {
      return this.http.get(`${apiServer}/api/News?`+ queryParams)
    }

    deleteNewsItem(queryParams:any): Observable<any> {
      return this.http.delete(`${apiServer}/api/News/`+ queryParams)
    }

    /* Api thư viện */

    getLibrariesFolder(): Observable<any> {
      return this.http.get(`${apiServer}/api/Library/GetLibrariesFolder`)
    }

    getLibrariesFile(Id: string): Observable<any> {
      return this.http.get(`${apiServer}/api/Library/GetLibrariesFile?folderId=${Id}`)
    }

    deleteLibrariesFile(Id: string): Observable<any> {
      return this.http.delete(`${apiServer}/api/Library/${Id}`)
    }

    uploadFile(data :any): Observable<any> {
      return this.http.post(`${apiServer}/api/Library`, data)
    }

    getRecruit(queryParams: any): Observable<any> {
      return this.http.get(`${apiServer}/api/Recruit?`+ queryParams)
    }

    getRecruitCandidate(queryParams: any): Observable<any> {
      return this.http.get(`${apiServer}/api/RecruitCandidate?`+ queryParams )
    }

    deleteRecruit(Id: string): Observable<any> {
      return this.http.delete(`${apiServer}/api/recruit/${Id}`)
    }
    
   /*  Api Account  */

    getListAccount(queryParams: any): Observable<any> {
       return this.http.get(`${apiServer}/api/Account?`+ queryParams)
    }

    deleteAccount(queryParams: any): Observable<any> {
       return this.http.delete(`${apiServer}/api/Account/`+ queryParams)
    }
     
   /*  Api FAQ */
   
    getListFAQ(queryParams: any): Observable<any> {
      return this.http.get(`${apiServer}/api/faq?`+ queryParams)
    }

   /*  Api Slider */

    getListSlider(queryParams: any): Observable<any> {
        return this.http.get(`${apiServer}/api/Slide?`+ queryParams)
    }

   /*  Api Teacher */

   getListTeacher(queryParams: any): Observable<any> {
      return this.http.get(`${apiServer}/api/Teacher?`+ queryParams)
   }

   deleteTeacher(Id: string): Observable<any> {
    return this.http.delete(`${apiServer}/api/Teacher/${Id}`)
  }

   /* api ClassRoom */

   getListClassRoom(queryParams: any): Observable<any> {
      return this.http.get(`${apiServer}/api/ClassRoom?`+ queryParams)
   }

   

}
