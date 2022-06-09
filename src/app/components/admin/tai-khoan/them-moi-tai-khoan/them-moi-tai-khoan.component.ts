import { Component, OnInit } from '@angular/core';
import * as queryString from 'query-string';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-them-moi-tai-khoan',
  templateUrl: './them-moi-tai-khoan.component.html',
  styleUrls: ['./them-moi-tai-khoan.component.scss']
})
export class ThemMoiTaiKhoanComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }
  private readonly unsubscribe$: Subject<void> = new Subject();
  items: any;
  UrlImg = '';
  showLibrary = false;
  val: number = 5;
  dataDropdown: any = [];
  data: any = [];
  query = {
    filter: '',
    offSet: 0,
    pageSize: 10,
  };
  selectedCategory: any

  ngOnInit(): void {
    this.items = [
      { label: 'Quản trị'},
      { label: 'Tài khoản ',  routerLink: '/tai-khoan'},
      { label: 'Chi tiết tài khoản'},
    ]
    this.fetchData();
  }
  
  fetchData(): void {
    this.GetNewsCategory();
  }

  GetNewsCategory(): void {
    const queryParams = queryString.stringify(this.query);
    this.apiService
      .getNewsCategory(queryParams)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response) => {
          this.dataDropdown = response.Data.Data;
          console.log("đâtropdown", this.dataDropdown)
        },
        error: (error) => {
          console.log('error', error);
        },
      });
  }

  showLibraryDialog() {
    this.showLibrary = true
  }

  selectedImages(event: any) {
    this.showLibrary = false
    this.UrlImg = event
  }

}
