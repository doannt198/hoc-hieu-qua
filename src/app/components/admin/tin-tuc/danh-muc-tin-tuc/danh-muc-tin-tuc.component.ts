import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import * as queryString from 'query-string';
@Component({
  selector: 'app-danh-muc-tin-tuc',
  templateUrl: './danh-muc-tin-tuc.component.html',
  styleUrls: ['./danh-muc-tin-tuc.component.scss']
})
export class DanhMucTinTucComponent implements OnInit {
  private readonly unsubscribe$: Subject<void> = new Subject();
  dataList: any = []
  data: any = []
  totalRecord = 0
  constructor(
    private apiService: ApiService
  ) { }
  query= {
    filter: '',
    offSet: 0,
    pageSize: 10
  }

  ngOnInit(): void {
   this.fetchData()
  }
  
  fetchData() {
    this.GetNewsCategory()
  }

  GetNewsCategory() {
    const queryParams = queryString.stringify(this.query)
    this.apiService.GetNewsCategory(queryParams)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next: (response) => {
        this.dataList = response.Data.Data
        this.totalRecord = response.Data.RecordsTotal
      },
      error: (error) => {
        console.log("error", error)
      }
    })
  }

  paginate(event:any) {
    console.log(event)
    this.query.offSet = event.first ;
    this.query.pageSize = event.rows;
    this.GetNewsCategory();
  }

  deleteProduct() {
   
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete()
  }
}
