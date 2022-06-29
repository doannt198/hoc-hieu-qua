import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { CategoryModel } from 'src/app/model/category.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-chi-tiet-tin-tuc',
  templateUrl: './chi-tiet-tin-tuc.component.html',
  styleUrls: ['./chi-tiet-tin-tuc.component.scss']
})
export class ChiTietTinTucComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }
  private readonly unsubscribe$: Subject<void> = new Subject();
  submited = false
  items :any;
  show: any;
  Name: any;
  Order: any;
  Status: any ;
  data: any;
  test: any
  datadetail: any;
  Id: any;
  cvStatus: any
  dataUpdate: CategoryModel = new CategoryModel();
  ngOnInit(): void {
    this.items = [
      {label:'Quản trị'},
      {label:'Tin tức', routerLink: '/trang-chu/danh-muc-tin-tuc'},
      {label:'Chi tiết tin tức'},
  ];
  this.Id = this.route.snapshot.params.id;
  this.getCategoryDetail(this.Id)
  }

  getCategoryDetail(Id: number) {
      this.apiService.getCategoryDetail(Id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          this.data = response.Data
          this.Id = this.data.Id
          this.Name = this.data.Name
          this.Order = this.data.Order
          if(this.data.Status == 1) {
            this.Status = true
          } else if (this.data.Status == 0 ) {
            this.Status = false
          }
        },
        error: (error) => {
          console.error("getCategoryDetail", error)
        }
      })
  }

  onSave(saveForm: any) {
    this.submited = true
    if(saveForm.invalid) {
      return
    }
    if(this.Status ==  true) {
      this.cvStatus = 1
    } else {
      this.cvStatus = 0
    }
    this.dataUpdate.id = this.Id
    this.dataUpdate.name = this.Name
    this.dataUpdate.order = this.Order
    this.dataUpdate.status = this.cvStatus 
    this.apiService.postCategory(this.dataUpdate)
    .subscribe({
      next: (response) => {
        if(response.Status === 'success') {
          this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Cập nhật thành công'})
        } 
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'Thông báo', detail: 'Cập nhật thất bại'})
      } 
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
