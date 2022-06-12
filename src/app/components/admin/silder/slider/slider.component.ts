import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import * as queryString from 'query-string';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

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
    screen: ''
  };
  showdialog = false
  showLibrary = false
  ngOnInit(): void {
    this.fetchData();
    this.primengConfig.ripple = true;
  }
  fetchData(): void {
    this.getListSlider();
  }

  getListSlider(): void {
    const queryParams = queryString.stringify(this.query);
    this.apiService
      .getListSlider(queryParams)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          console.log("Slider", response)
          this.dataList = response.Data.Data;
          this.totalRecord = response.Data.RecordsTotal;
        },
        error: (error) => {
          console.log('error', error);
        },
      });
  }
  showDiaglog():  void {
    this.showdialog = true
  }

  selectedImg(event: any): void {

  }

  paginate(event: any): void {
    console.log(event);
    this.query.offSet = event.first;
    this.query.pageSize = event.rows;
    this.getListSlider();
  }

  deleteProduct(dataList: any): void {
    this.confirmationService.confirm({
      message: `Bạn có chắc chắn muốn xóa ${dataList.Name} ?`,
      accept: () => {
          this.apiService.deleteSlider(dataList.Id)
          .subscribe({
            next: (response) => {
              if (response.Status === 'success') {
                this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Xóa thành công'})
                this.getListSlider();
              }
            },
            error: (error) => {
              console.error("error", error)
            }
          })
      }
    })
  }
  
  showLibraryDialog(): void {
    this.showLibrary = true
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}
