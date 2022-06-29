import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CategoryModel } from 'src/app/model/category.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-them-moi-tin-tuc',
  templateUrl: './them-moi-tin-tuc.component.html',
  styleUrls: ['./them-moi-tin-tuc.component.scss']
})
export class ThemMoiTinTucComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
    private router: Router
  ) { }
  submited = false
  items :any;
  show: any;
  Name: any;
  Order: any;
  Status: any;
  cvStatus: any;
  dataSave: CategoryModel = new CategoryModel();
  ngOnInit(): void {
    this.items = [
      {label:'Quản trị'},
      {label:'Tin tức', routerLink: '/trang-chu/danh-muc-tin-tuc'},
      {label:'Chi tiết tin tức'},
  ];
  }

  onSave(saveForm: any) {
    this.submited = true
    if(saveForm.invalid) {
      return
    }
    this.dataSave.id= ''
    this.dataSave.name = this.Name
    this.dataSave.order = this.Order
    if( this.Status == true) {
      this.cvStatus = 1
    } else {
      this.cvStatus = 2
    }
    this.dataSave.status = this.cvStatus
    this.apiService.postCategory(this.dataSave)
    .subscribe({
      next: (response) => {
        console.log("dsd", response)
        if(response.Status === 'success') {
          this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Thêm thành công'})
          this.router.navigate([`/danh-muc-tin-tuc/${response.Data}`])  
        }
      }, 
      error: () => {
        this.messageService.add({severity: 'error', summary: 'Thông báo', detail: 'Thêm thất bại'})
      }
    })
  }

}
