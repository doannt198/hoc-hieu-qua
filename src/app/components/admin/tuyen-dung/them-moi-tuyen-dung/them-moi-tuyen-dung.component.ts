import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import * as queryString from 'query-string';
import { Subject, takeUntil } from 'rxjs';
import { RecruitModel } from 'src/app/model/recruit.model';
import { ApiService } from 'src/app/service/api.service';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
@Component({
  selector: 'app-them-moi-tuyen-dung',
  templateUrl: './them-moi-tuyen-dung.component.html',
  styleUrls: ['./them-moi-tuyen-dung.component.scss'],
})
export class ThemMoiTuyenDungComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private messageService: MessageService, 
    private spinner: NgxSpinnerService,
    private router: Router
    ) {}
  private readonly unsubscribe$: Subject<void> = new Subject();
  items: any;
  UrlImg = '';
  showLibrary = false;
  val: number = 5;
  dataDropdown: any = [];
  data: any = [];
  Name: any;
  Price: any;
  Address: any;
  Order: any;
  Tags: any;
  Content: any;
  Status: any;
  IsHot: any;
  cvStatus: any
  cvIsHot: any 
  Requirement: any;
  submited = false
  dataSave: RecruitModel = new RecruitModel() 
  query = {
    filter: '',
    offSet: 0,
    pageSize: 10,
  };
  selectedCategory: any;

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    this.items = [
      { label: 'Quản trị' },
      { label: 'Tuyển dụng ', routerLink: '/quan-li-tuyen-dung' },
      { label: 'Chi tiết tuyển dụng' },
    ];
    
  }

  onSave(dataSave :any) { 
    this.submited=true;
    if(dataSave.invalid) {
      return 
    }
    if(this.Status == true) {
      this.cvStatus = 1
    } else {
      this.cvStatus = 0
    }
    if(this.IsHot == true) {
      this.cvIsHot = 1
    } else {
      this.cvIsHot = 0
    }
    const CreatedDate = new Date()
    const ModifiedDate = new Date()
    const cvTag = this.Tags.toString()
    this.dataSave.Id= ''
    this.dataSave.Name = this.Name
    this.dataSave.Price = this.Price
    this.dataSave.Address = this.Address
    this.dataSave.Order = this.Order
    this.dataSave.Requirement = this.Requirement
    this.dataSave.Content = this.Content
    this.dataSave.Status = this.cvStatus
    this.dataSave.IsHot = this.cvIsHot
    this.dataSave.Tags = cvTag
    this.dataSave.CreatedBy = ''
    this.dataSave.ModifiedBy = ''
    this.dataSave.CreatedDate =  CreatedDate
    this.dataSave.ModifiedDate = ModifiedDate
    this.apiService.postRecruit(this.dataSave)
    .subscribe({
      next: (response) => {
        console.log(response)
         this.messageService.add({severity: 'success', summary: 'Thông báo', detail: "Thêm thành công"})
         this.router.navigate([`/tuyen-dung/${response.Data}`])
      },
      error: () => {
        this.messageService.add({severity: 'success', summary: 'Thông báo', detail: "Thêm thất bại"})
      }
    })
  }

  changeStatus(event: any) {
    
  }

  changeIsHot(event: any) {
    
  }
}
