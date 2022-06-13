import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { takeUntil } from 'rxjs';
import { FaqModel } from 'src/app/model/faq.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-chi-tiet-faq',
  templateUrl: './chi-tiet-faq.component.html',
  styleUrls: ['./chi-tiet-faq.component.scss']
})
export class ChiTietFaqComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) { }
  submited = false
  items :any;
  show: any;
  dataSave: FaqModel = new FaqModel();
  Title: any;
  Order: any;
  Status: any;
  Content: any;
  Id = 0;
  dataDetail: any[] = []
  category = {
    Name: '',
    Status: 0,
    Order:''
  }

  ngOnInit(): void {
    this.spinner.show();
    this.spinner.hide()
    this.items = [
      {label:'Quản trị'},
      {label:'FAQ', routerLink: '/faq'},
      {label:'Chi tiết FAQ'},
  ];
    this.Id = this.route.snapshot.params.id;
    this.getDetailFaq(this.Id)
  }

  getDetailFaq(Id: any): void {
      this.spinner.show();
      this.apiService.getDetailFaq(Id)
      .pipe()
      .subscribe({
        next: (response) => {
            console.log("dataDetail", response)
            this.spinner.hide()
        }, error: (error)=> {
          console.error(error)
        }
      })
  }
  onSave(saveForm: any) {
    this.submited = true
    if(saveForm.invalid) {
      return
    }
    const createdDate = new Date()
    const modifiedDate = new Date()
    this.dataSave.id = ''
    this.dataSave.title = this.Title
    this.dataSave.content = this.Content
    this.dataSave.order = this.Order
    this.dataSave.status = this.Status
    this.dataSave.createdDate = createdDate
    this.dataSave.modifiedDate =modifiedDate
    this.apiService.postFaq(this.dataSave)
    .subscribe({
      next: (response) => {
        console.log("dsd", response)
        if(response.Status === 'success') {
          this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Thêm thành công'})
        /*   this.router.navigate([`/faq/${response.Data}`])   */
        } 
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'Thông báo', detail: 'Thêm thất bại'})
      }
    }) 
  }

  change(event:any ) {
    if(event.checked == true) {
      this.Status = 1
      console.log("sss", this.category.Status)
    } 
    if(event.checked == false) {
      this.Status = 0 
      console.log("aaa", this.category.Status)
    }
  }
}
