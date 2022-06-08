import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
  }

  onSave(saveForm: any) {
    this.submited = true
    if(saveForm.invalid) {
      return
    }
    this.apiService.postCategory(this.category)
    .subscribe({
      next: (response) => {
        if(response.Status === 'success') {
          this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Thêm thành công'})
          this.category.Name = '',
          this.category.Status = 0,
          this.category.Order = ''
        } else {
          this.messageService.add({severity: 'error', summary: 'Thông báo', detail: 'Thêm thất bại'})
        }
      }
    })
  }

  change(event:any ) {
    if(event.checked == true) {
      this.category.Status = 1
    } 
    if(event.checked == false) {
      this.category.Status = 0 
    }
  }
}
