import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import * as queryString from 'query-string'
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-ung-vien',
  templateUrl: './ung-vien.component.html',
  styleUrls: ['./ung-vien.component.scss']
})
export class UngVienComponent implements OnInit {
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
    pageSize: 10,
  };
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    this.fetchData();
    this.primengConfig.ripple = true;
  }
  fetchData() {
    this.getRecruitCandidate();
  }

  getRecruitCandidate() {
    const queryParams = queryString.stringify(this.query);
    this.apiService
      .getRecruitCandidate(queryParams)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          console.log("ứng dụng", response)
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
    this.getRecruitCandidate();
  }

  deleteProduct(Id: string) {
    
  }
  
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
