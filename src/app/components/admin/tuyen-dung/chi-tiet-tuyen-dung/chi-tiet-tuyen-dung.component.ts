import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { RecruitModel } from 'src/app/model/recruit.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-chi-tiet-tuyen-dung',
  templateUrl: './chi-tiet-tuyen-dung.component.html',
  styleUrls: ['./chi-tiet-tuyen-dung.component.scss']
})
export class ChiTietTuyenDungComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private messageService: MessageService, 
    private spinner: NgxSpinnerService,
    private router: ActivatedRoute
    ) {}
  private readonly unsubscribe$: Subject<void> = new Subject();
  items: any;
  UrlImg = '';
  showLibrary = false;
  val: number = 5;
  dataDetail: any = [];
  Name: any;
  Price: any;
  Id: any = null; 
  Address: any;
  Order: any;
  Tags: any;
  Content: any;
  Status: any;
  cvStatus: any;
  cvIsHot: any;
  IsHot: any;
  CreatedDate: any;
  CreatedBy: any;
  Requirement: any;
  submited = false;
  ModifiedBy: any;
  ModifiedDate: any;
  dataUpdate: RecruitModel = new RecruitModel() 
  selectedCategory: any;

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.items = [
      { label: 'Quản trị' },
      { label: 'Tuyển dụng ', routerLink: '/trang-chu/quan-li-tuyen-dung' },
      { label: 'Chi tiết tuyển dụng' },
    ];
    this.Id = this.router.snapshot.params.id;
    this.getDetailRecruit(this.Id)
  }

  getDetailRecruit(Id: any): void {
      this.apiService.getDetailRecruit(Id)
      .subscribe({
        next: (response) => {
          if(this.dataDetail.Status = 1) {
            this.cvStatus = true
          } else {
            this.cvStatus = false
          }
          if(this.dataDetail.IsHot = 1) {
            this.cvIsHot = true
          } else {
            this.cvIsHot = false
          }
          this.dataDetail = response.Data
          this.Id = this.dataDetail.Id
          this.Address = this.dataDetail.Address
          this.Content = this.dataDetail.Content
          this.CreatedBy = this.dataDetail.CreatedBy
          this.CreatedDate = this.dataDetail.CreatedDate
          this.Name = this.dataDetail.Name
          this.Order = this.dataDetail.Order
          this.Price = this.dataDetail.Price
          this.Tags = ""
          this.Requirement = this.dataDetail.Requirement
          this.ModifiedBy = this.dataDetail.ModifiedBy
          this.ModifiedDate = this.dataDetail.ModifiedDate
          this.Status = this.cvStatus
          this.IsHot = this.cvIsHot
        },
        error: (error) => {
          console.log("Error", error)
        } 
      })
  }

  onSave(datasave: any): void {
    /* const cvTag = this.dataDetail.Tags.split(",") */
    this.submited=true
    if(datasave.invalid) {
        return;
    }
  
      this.dataUpdate.Id =  this.Id,
      this.dataUpdate.Name = this.Name,
      this.dataUpdate.Price = this.Price,
      this.dataUpdate.Address = this.Address,
      this.dataUpdate.Order = this.Order,
      this.dataUpdate.Requirement = this.Requirement,
      this.dataUpdate.Content = this.Content,
      this.Status = this.Status,
      this.dataUpdate.IsHot = this.IsHot,
      this.dataUpdate.Tags= "",
      this.dataUpdate.CreatedBy = this.CreatedBy,
      this.dataUpdate.ModifiedBy = this.ModifiedBy,
      this.dataUpdate.CreatedDate = this.CreatedDate,
      this.dataUpdate.ModifiedDate = this.ModifiedDate
  
    /* const CreatedDate = new Date()
    const ModifiedDate = new Date()
    const cvTag = this.Tags.toString()
    this.dataSave.Id= ''
    this.dataSave.Name = this.Name
    this.dataSave.Price = this.Price
    this.dataSave.Address = this.Address
    this.dataSave.Order = this.Order
    this.dataSave.Requirement = this.Requirement
    this.dataSave.Content = this.Content
    this.dataSave.Status = this.Status
    this.dataSave.IsHot = this.IsHot
    this.dataSave.Tags = cvTag
    this.dataSave.CreatedBy = ''
    this.dataSave.ModifiedBy = ''
    this.dataSave.CreatedDate =  CreatedDate
    this.dataSave.ModifiedDate = ModifiedDate */
    this.apiService.postRecruit(this.dataUpdate)
    .subscribe({
      next: (response) => {
        console.log(response)
         this.messageService.add({severity: 'success', summary: 'Thông báo', detail: "Cập nhật thành công"})
      },
      error: (error) => {
        console.error("Error", error)
      }
    }) 
  }

  changeStatus(event: any): void {
      if(event.checked ==  true) {
        this.Status = 1
      }
      if(event.checked == false)
      {
        this.Status = 0
      }
  }

  changeIsHot(event: any): void {
    if(event.checked ==  true) {
      this.IsHot = 1
    }
    if(event.checked == false)
    {
      this.IsHot = 0
    }
  }

}
