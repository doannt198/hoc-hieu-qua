import { Component, OnInit } from '@angular/core';
import * as queryString from 'query-string';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-them-moi-tuyen-dung',
  templateUrl: './them-moi-tuyen-dung.component.html',
  styleUrls: ['./them-moi-tuyen-dung.component.scss'],
})
export class ThemMoiTuyenDungComponent implements OnInit {
  constructor(private apiService: ApiService) {}
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
  selectedCategory: any;

  ngOnInit(): void {
    this.items = [
      { label: 'Quản trị' },
      { label: 'Tuyển dụng ', routerLink: '/quan-li-tuyen-dung' },
      { label: 'Chi tiết tuyển dụng' },
    ];
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
          console.log('đâtropdown', this.dataDropdown);
        },
        error: (error) => {
          console.log('error', error);
        },
      });
  }

  showLibraryDialog() {
    this.showLibrary = true;
  }

  selectedImages(event: any) {
    this.showLibrary = false;
    this.UrlImg = event;
  }
}
