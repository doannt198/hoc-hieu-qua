import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
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
  data: any;
    test: any
  datadetail: any;
  Id: number = 0
  category = {
    Name: '',
    Status: 0,
    Order:''
  }
  ngOnInit(): void {
    this.items = [
      {label:'Quản trị'},
      {label:'Tin tức', routerLink: '/danh-muc-tin-tuc'},
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
    const dataSave = {
      Id: this.data.Id,
      Name: this.data.Name,
      Order: this.data.Order,
      Status: this.data.Status
    }
    console.log(dataSave)
    this.apiService.postCategory(dataSave)
    .subscribe({
      next: (response) => {
        if(response.Status === 'success') {
          this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Cập nhật thành công'})
          this.category.Name = '',
          this.category.Status = 0,
          this.category.Order = ''
        } else {
          this.messageService.add({severity: 'error', summary: 'Thông báo', detail: 'Thêm thất bại'})
        }
      }
    })
  }

  change(event: any) {
    console.log(event)
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
