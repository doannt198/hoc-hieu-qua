import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import * as queryString from 'query-string';
import { NgxSpinnerService } from 'ngx-spinner';
import { AccountModel } from 'src/app/model/account.model';
@Component({
  selector: 'app-tai-khoan',
  templateUrl: './tai-khoan.component.html',
  styleUrls: ['./tai-khoan.component.scss']
})
export class TaiKhoanComponent implements OnInit {
  private readonly unsubscribe$: Subject<void> = new Subject();
  dataList: any = [];
  data: any = [];
  totalRecord = 0;
 
  constructor(
    private apiService: ApiService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private spinner: NgxSpinnerService
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
    this.getListAccount();
  }

  getListAccount(): void {
    this.spinner.show()
    const queryParams = queryString.stringify(this.query);
    this.apiService
      .getListAccount(queryParams)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          console.log("tài khoản",response)
          this.dataList = response.data.data;
          this.totalRecord = response.data.RecordsTotal;
          this.spinner.hide()
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
    this.getListAccount();
  }

  deleteAccount(dataList: any) {
    this.confirmationService.confirm({
      message: 'Bạn có chắc chắn muốn xoá?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.apiService.deleteAccount(dataList.Id)
        .subscribe({
          next:(response) => {
            if(response.Status === 'success') {
              this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Xoá thành công'});
              this.getListAccount();
            }
          }, error : () => {
            this.messageService.add({ severity: 'error', summary : 'Thông báo', detail: 'Xoá thất bại'})
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
