import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-them-moi-faq',
  templateUrl: './them-moi-faq.component.html',
  styleUrls: ['./them-moi-faq.component.scss']
})
export class ThemMoiFaqComponent implements OnInit {

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
      {label:'FAQ', routerLink: '/faq'},
      {label:'Chi tiết FAQ'},
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
        console.log("dsd", response)
        if(response.Status === 'success') {
          this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Thêm thành công'})
          this.router.navigate([`/danh-muc-tin-tuc/${response.Data}`])  
        } else {
          this.messageService.add({severity: 'error', summary: 'Thông báo', detail: 'Thêm thất bại'})
        }
      }
    })
  }

  change(event:any ) {
    if(event.checked == true) {
      this.category.Status = 1
      console.log("sss", this.category.Status)
    } 
    if(event.checked == false) {
      this.category.Status = 0 
      console.log("aaa", this.category.Status)
    }
  }
}
