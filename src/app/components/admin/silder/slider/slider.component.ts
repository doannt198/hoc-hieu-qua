import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import * as queryString from 'query-string';
import { SliderModel } from 'src/app/model/slider.model';
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
  Name: any;
  Screen: any;
  Order: any ;
  Status: any;
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
  UrlImg: any = null
  dataSave: SliderModel = new SliderModel()
  submited = false
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
    this.showLibrary = false
    this.UrlImg = event
  }

  paginate(event: any): void {
    console.log(event);
    this.query.offSet = event.first;
    this.query.pageSize = event.rows;
    this.getListSlider();
  }

  deleteProduct(dataList: any): void {
    this.confirmationService.confirm({
      message: `B???n c?? ch???c ch???n mu???n x??a ${dataList.Name} ?`,
      accept: () => {
          this.apiService.deleteSlider(dataList.Id)
          .subscribe({
            next: (response) => {
              if (response.Status === 'success') {
                this.messageService.add({severity: 'success', summary: 'Th??ng b??o', detail: 'X??a th??nh c??ng'})
                this.getListSlider();
              }
            },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Th??ng b??o', detail: 'X??a th???t b???i'})
            }
          })
      }
    })
  }
  
  onSaveSlider(dataSave:any): void {
    this.submited = true
    if(dataSave.invalid) {
        return;
    }
    this.dataSave.name = this.Name 
    this.dataSave.imageUrl = this.UrlImg
    this.dataSave.status = this.Status
    this.dataSave.order =  this.Order
    this.dataSave.screen =  this. Screen
    this.apiService.postSlider(this.dataSave)
    .subscribe({
      next: (response) => {
        this.messageService.add({ severity:'success', summary: 'Th??ng b??o', detail: 'Th??m th??nh c??ng'})
          this.getListSlider();
          this.showdialog = false
      },
      error: () => {
        this.messageService.add({ severity:'error', summary: 'Th??ng b??o', detail: 'Th??m th???t b???i'})
      }
    })
  }

  changeStatus(event: any): void {
    if(event.checked == true) {
      this.Status = 1
    } else if(event.checked ==  false) {
      this.Status = 0
    }
  }

  showLibraryDialog(): void {
    this.showLibrary = true
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
