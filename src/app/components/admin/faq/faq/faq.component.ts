import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import * as queryString from 'query-string';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
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
    pageSize: 5,
  };
  ngOnInit(): void {
    this.fetchData();
    this.primengConfig.ripple = true;
  }
  fetchData() {
    this.getListFAQ();
  }

  getListFAQ(): void {
    const queryParams = queryString.stringify(this.query);
    this.apiService
      .getListFAQ(queryParams)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          console.log("Faq", response)
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
    this.getListFAQ();
  }

  deleteFaq(dataList: any) {
    this.confirmationService.confirm({
      message: `Bạn có chắc chắn muốn xóa?`,
      accept: () => {
        this.apiService.deleteFaq(dataList.Id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: (response) => {
            if(response.Status === 'success') {
              this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Xóa thành công'})
              this.getListFAQ()
            } else {
              this.messageService.add({ severity: 'error', summary: 'Thông báo', detail: 'Xóa thất bại'})
            }
          }, error: (error) => {
            console.error(error)
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
