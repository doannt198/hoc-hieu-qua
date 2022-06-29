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
    /* Api Authen */

    apiAuthentication(data: any): Observable<any> {
        return this.http.post(`${apiServer}/api/Authentication/authenticate`, data)
    }
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

    getCategoryDetail(Id: any): Observable<any> {
      return this.http.get(`${apiServer}/api/NewsCategory/${Id}`)
    }

    /* Api quản lí tin tức */ 

    getNews(queryParams: any): Observable<any> {
      return this.http.get(`${apiServer}/api/News?`+ queryParams)
    }

    deleteNewsItem(queryParams:any): Observable<any> {
      return this.http.delete(`${apiServer}/api/News/`+ queryParams)
    }
    
    postNews(data: any): Observable<any> {
      return this.http.post(`${apiServer}/api/News`, data)
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

    postRecruit(data: any): Observable<any> {
      return this.http.post(`${apiServer}/api/recruit`, data)
    }

    getDetailRecruit(Id: any): Observable<any> {
      return this.http.get(`${apiServer}/api/Recruit/${Id}`)
    }
    

   /*  Api Account  */

    getListAccount(queryParams: any): Observable<any> {
       return this.http.get(`${apiServer}/api/Account?`+ queryParams)
    }

    deleteAccount(queryParams: any): Observable<any> {
       return this.http.delete(`${apiServer}/api/Account/`+ queryParams)
    }

    postAccount(data: any): Observable<any> {
      return this.http.post(`${apiServer}/api/Account/`, data)
    }

    getDetailTeacher(Id: any): Observable<any> {
      return this.http.get(`${apiServer}/api/Teacher/` +Id )
    }
     
   /*  Api FAQ */
   
    getListFAQ(queryParams: any): Observable<any> {
      return this.http.get(`${apiServer}/api/faq?`+ queryParams)
    }

    deleteFaq(Id: any): Observable<any> {
      return this.http.delete(`${apiServer}/api/FAQ/`+ Id)
    }

    postFaq(data: any): Observable<any> {
      return this.http.post(`${apiServer}/api/FAQ`, data)
    }

    getDetailFaq(Id: any ): Observable<any> {
      return this.http.get(`${apiServer}/api/faq/` + Id)
    }

   /*  Api Slider */

    getListSlider(queryParams: any): Observable<any> {
        return this.http.get(`${apiServer}/api/Slide?`+ queryParams)
    }

    getListDetailSlider(Id: any): Observable<any> {
        return this.http.get(`${apiServer}/api/Slide/`+Id)
    }

    deleteSlider(Id: string): Observable<any> {
        return this.http.delete(`${apiServer}/api/Slide/`+ Id)
    }

    postSlider(data: any): Observable<any> {
        return this.http.post(`${apiServer}/api/Slide`, data)
    }

   /*  Api Teacher */

   getListTeacher(queryParams: any): Observable<any> {
      return this.http.get(`${apiServer}/api/Teacher?`+ queryParams)
   }

   deleteTeacher(Id: string): Observable<any> {
    return this.http.delete(`${apiServer}/api/Teacher/${Id}`)
  }

  postTeacher(data: any): Observable<any> {
    return this.http.post(`${apiServer}/api/Teacher`, data)
  }

   /* api ClassRoom */

   getListClassRoom(queryParams: any): Observable<any> {
      return this.http.get(`${apiServer}/api/ClassRoom?`+ queryParams)
   }

   

}
