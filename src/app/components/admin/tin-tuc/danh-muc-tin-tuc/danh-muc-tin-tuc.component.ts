import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import * as queryString from 'query-string';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-danh-muc-tin-tuc',
  templateUrl: './danh-muc-tin-tuc.component.html',
  styleUrls: ['./danh-muc-tin-tuc.component.scss']
})
export class DanhMucTinTucComponent implements OnInit {
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
  ) {}
  query = {
    filter: '',
    offSet: 0,
    pageSize: 10,
  };

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
    this.fetchData();
    this.primengConfig.ripple = true;
  }

  fetchData() {
    this.GetNewsCategory();
  }

  GetNewsCategory() {
    this.spinner.show();
    const queryParams = queryString.stringify(this.query);
    this.apiService
      .getNewsCategory(queryParams)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          this.dataList = response.Data.Data;
          this.totalRecord = response.Data.RecordsTotal;
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
    this.GetNewsCategory();
  }

  deleteCategory(dataList: any) {
    this.confirmationService.confirm({
      message: `Bạn có chắc chắn muốn xoá ?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.apiService.deleteCategory(dataList.Id)
          .subscribe({
            next: (response) => {
                if (response.Status === 'success') {
                  this.messageService.add({
                    severity: 'success',
                    summary: 'Thông báo',
                    detail: 'Xoá thành công',
                  });
                  this.GetNewsCategory();
                } 
            },
            error: () => {
              this.messageService.add({ severity: 'error', summary : 'Thông báo', detail: 'Xoá thất bại'})
            }
        })
      }
    });
  }
  handleEdit(): void {

  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
