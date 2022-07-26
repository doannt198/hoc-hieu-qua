import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import * as queryString from 'query-string';
@Component({
  selector: 'app-lop-hoc',
  templateUrl: './lop-hoc.component.html',
  styleUrls: ['./lop-hoc.component.scss']
})
export class LopHocComponent implements OnInit {

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
    pageSize: 5
  };

  ngOnInit(): void {
    this.fetchData();
    this.primengConfig.ripple = true;
  }

  fetchData() {
    this.getListClassRoom();
  }

  getListClassRoom(): void {
    const queryParams = queryString.stringify(this.query);
    this.apiService
      .getListClassRoom(queryParams)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          console.log("LỚp học", response)
          this.dataList = response.data.data;
          this.totalRecord = response.data.recordsTotal;
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
    this.getListClassRoom();
  }

  deleteProduct(Id: string) {
    
  }
  
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
