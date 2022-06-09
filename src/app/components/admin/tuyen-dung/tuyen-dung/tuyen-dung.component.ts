import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import * as queryString from 'query-string'
@Component({
  selector: 'app-tuyen-dung',
  templateUrl: './tuyen-dung.component.html',
  styleUrls: ['./tuyen-dung.component.scss']
})
export class TuyenDungComponent implements OnInit {
  private readonly unsubscribe$: Subject<void> = new Subject();
  dataList: any = [];
  data: any = [];
  totalRecord = 0;

  constructor(
    private apiService: ApiService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) { }
  query = {
    filter: '',
    offSet: 0,
    pageSize: 10,
  };
  ngOnInit(): void {
    this.fetchData();
    this.primengConfig.ripple = true;
  }
  fetchData() {
    this.getRecruit();
  }

  getRecruit() {
    const queryParams = queryString.stringify(this.query);
    this.apiService
      .getRecruit(queryParams)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          console.log("tuyển dụng", response)
          this.dataList = response.Data.Data;
          this.totalRecord = response.Data.RecordsTotal;
        },
        error: (error) => {
          console.log('error', error);
        },
      });
  }

  paginate(event: any) {
    console.log(event);
    this.query.offSet = event.first;
    this.query.pageSize = event.rows;
    this.getRecruit();
  }

  deleteProduct(dataList: any ) {
    this.confirmationService.confirm({
      message: 'Bạn có chắc chắn muốn xoá?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
         this.apiService.deleteRecruit(dataList.Id)
        .subscribe({
          next: (response) => {
            if(response.Status === 'success') {
              this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Xoá thành công'})
              this.getRecruit();
            } else {
              this.messageService.add({ severity: 'error', summary: 'Thông báo', detail: 'Xoá thất bại'})
            }
          },
          error: (error) => {
            console.error("deleteProduct", error)
          }
        }) 
      }
    })
  }
  
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
