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
  IsHot: any;
  Requirement: any;
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
      this.spinner.hide();
    }, 1000);
    this.items = [
      { label: 'Quản trị' },
      { label: 'Tuyển dụng ', routerLink: '/quan-li-tuyen-dung' },
      { label: 'Chi tiết tuyển dụng' },
    ];
    this.Id = this.router.snapshot.params.id;
    this.getDetailRecruit(this.Id)
  }

  getDetailRecruit(Id: any): void {
      this.apiService.getDetailRecruit(Id)
      .subscribe({
        next: (response) => {
          console.log("chi tiết tuyển dụng", response)
          this.dataDetail = response.Data
        },
        error: (error) => {
          console.log("Error", error)
        } 
      })
  }

  onSave(): void {
    /* const cvTag = this.dataDetail.Tags.split(",") */
    
    const dataSave = {
      Id: this.dataDetail.Id,
      Name: this.dataDetail.Name,
      Price: this.dataDetail.Price,
      Address: this.dataDetail.Address,
      Order: this.dataDetail.Order,
      Requirement: this.dataDetail.Requirement,
      Content: this.dataDetail.Content,
      Status: this.dataDetail.Status,
      IsHot: this.dataDetail.IsHot,
      Tags: "",
      CreatedBy: this.dataDetail.CreatedBy,
      ModifiedBy: this.dataDetail.ModifiedBy,
      CreatedDate: this.dataDetail.CreatedDate,
      ModifiedDate: this.dataDetail.ModifiedDate
    }
    
    console.log("data sau khi lưu", dataSave)
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
    this.apiService.postRecruit(dataSave)
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
