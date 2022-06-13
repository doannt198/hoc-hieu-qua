import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import * as queryString from 'query-string';
import { ApiService } from 'src/app/service/api.service';
import { NewModel } from 'src/app/model/news.model';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-them-moi',
  templateUrl: './them-moi.component.html',
  styleUrls: ['./them-moi.component.scss']
})
export class ThemMoiComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) { }
  private readonly unsubscribe$: Subject<void> = new Subject();
  items: any;
  UrlImg: any = null ;
  showLibrary = false;
  val: number = 5;
  dataDropdown: any = [];
  data: any = [];
  Title: any;
  Order: any;
  Tags: any;
  ShortContent: any;
  Content: any;
  dataSave: NewModel = new NewModel();
  query = {
    filter: '',
    offSet: 0,
    pageSize: 10,
  };
  selectedCategory: any
  submited=false
  ngOnInit(): void {
    this.items = [
      { label: 'Quản trị'},
      { label: 'Tin tức',  routerLink: '/quan-li-tin-tuc'},
      { label: 'Chi tiết tin tức'},
    ]
    this.fetchData();
  }
  
  fetchData(): void {
    this.GetNewsCategory();
  }

  onSave(dataSave: any) {
  this.submited=true;
  if(dataSave.invalid) {
    return;
  }
  console.log(this.submited)
  const createdDate = new Date();
  const modifiedDate = new Date();
   this.dataSave.id= '';
   this.dataSave.avatar = this.UrlImg;
   this.dataSave.categoryId = this.selectedCategory;
  this.dataSave.title = this.Title;
  this.dataSave.content = this.Content;
  this.dataSave.status = 0;
  this.dataSave.order = 0;
  this.dataSave.status = 0;
  this.dataSave.rate = 0;
  this.dataSave.shortContent = this.ShortContent;
  this.dataSave.tags = '';
  this.dataSave.view = 0;
  this.dataSave.author= '';
  this.dataSave.createdDate = createdDate;
  this.dataSave.createdBy = '';
  this.dataSave.modifiedDate = modifiedDate;
  this.dataSave.modifiedBy = '';
  this.apiService.postNews(this.dataSave)
  .subscribe({
    next: (response) => {
      if(response.Status === 'success') {
         this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Thêm thành công'})
      }
    },
    error: () => {
      this.messageService.add({severity: 'error', summary: 'Thông báo', detail: 'Thêm thất bại'})
    }
  })
  }

  GetNewsCategory(): void {
    const queryParams = queryString.stringify(this.query);
    this.apiService
      .getNewsCategory(queryParams)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          this.dataDropdown = response.Data.Data;
          console.log("dropdown", this.dataDropdown)
        },
        error: (error) => {
          console.log('error', error);
        },
      });
  }

  showLibraryDialog(): void {
    this.showLibrary = true
  }

  selectedImg(event: any) {
    this.showLibrary = false
    this.UrlImg = event
  }
}
