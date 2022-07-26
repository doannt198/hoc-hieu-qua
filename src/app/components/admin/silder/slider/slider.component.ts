import { Component, OnInit } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
} from 'primeng/api';
import { Subject, take, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import * as queryString from 'query-string';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  private readonly unsubscribe$: Subject<void> = new Subject();
  dataList: any = [];
  data: any = [];
  totalRecord = 0;
  dataDetail: any;
  selectSlider = null;
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
    pageSize: 5,
    screen: '',
  };
  showdialog = false;
  showLibrary = false;
  UrlImg: any = null;
  ngOnInit(): void {
    this.fetchData();
    this.primengConfig.ripple = true;
  }
  fetchData(): void {
    this.getListSlider();
  }

  loadList() {
    this.getListSlider();
    this.showdialog = false;
  }

  getListSlider(): void {
    this.spinner.show()
    const queryParams = queryString.stringify(this.query);
    this.apiService
      .getListSlider(queryParams)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          this.dataList = response.data.data;
          console.log("data", this.dataList)
          this.totalRecord = response.data.recordsTotal;
          this.spinner.hide();
        },
        error: (error) => {
          console.log('error', error);
        },
      });
  }

  showDiaglog(): void {
    this.showdialog = true;
    this.selectSlider = null
  }

  paginate(event: any): void {
    console.log(event);
    this.query.offSet = event.first;
    this.query.pageSize = event.rows;
    this.getListSlider();
  }

  handleEditSlider(item: any) {
    this.showdialog = true;
    this.selectSlider = item
  }

  deleteProduct(dataList: any): void {
    this.confirmationService.confirm({
      message: `Bạn có chắc chắn muốn xóa ${dataList.Name} ?`,
      accept: () => {
        this.apiService.deleteSlider(dataList.Id).subscribe({
          next: (response) => {
            if (response.Status === 'success') {
              this.messageService.add({
                severity: 'success',
                summary: 'Thông báo',
                detail: 'Xóa thành công',
              });
              this.getListSlider();
            }
          },
          error: (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Thông báo',
              detail: 'Xóa thất bại',
            });
          },
        });
      },
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
