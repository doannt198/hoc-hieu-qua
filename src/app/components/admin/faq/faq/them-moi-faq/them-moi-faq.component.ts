import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FaqModel } from 'src/app/model/faq.model';
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
  dataSave: FaqModel = new FaqModel();
  Title: any;
  Order: any;
  Status: any;
  Content: any;
  cvStatus: any;
  ngOnInit(): void {
    this.items = [
      {label:'Quản trị'},
      {label:'FAQ', routerLink: '/trang-chu/faq'},
      {label:'Chi tiết FAQ'},
  ];
  }

  onSave(saveForm: any) {
    this.submited = true
    if(saveForm.invalid) {
      return
    }
    if (this.Status == true ) {
      this.cvStatus = 1
    } else {
      this.cvStatus = 0
    }
    const createdDate = new Date()
    const modifiedDate = new Date()
    this.dataSave.id = ''
    this.dataSave.title = this.Title
    this.dataSave.content = this.Content
    this.dataSave.order = this.Order
    this.dataSave.status = this.cvStatus
    this.dataSave.createdDate = createdDate
    this.dataSave.modifiedDate =modifiedDate
    this.apiService.postFaq(this.dataSave)
    .subscribe({
      next: (response) => {
        console.log("dsd", response)
        if(response.status === 'success') {
          this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Thêm thành công'})
          this.router.navigate([`/trang-chu/chi-tiet-faq/${response.data}`])  
        } 
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'Thông báo', detail: 'Thêm thất bại'})
      }
    }) 
  }

}
