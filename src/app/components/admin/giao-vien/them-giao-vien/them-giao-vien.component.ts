import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import * as queryString from 'query-string';
import { Subject, takeUntil } from 'rxjs';
import { NewModel } from 'src/app/model/news.model';
import { TeacherModel } from 'src/app/model/teacher.model';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-them-giao-vien',
  templateUrl: './them-giao-vien.component.html',
  styleUrls: ['./them-giao-vien.component.scss'],
})
export class ThemGiaoVienComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private messageService: MessageService, 
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}
  private readonly unsubscribe$: Subject<void> = new Subject();
  items: any;
  showLibrary = false;
  teacher: any = {
    fullName: '',
    avatar: '',
    description: '',
    descriptionShort: '',
    order: 0,
    createdDate: '',
    modifiedDate: '',
    createdBy: '',
    modifiedBy: '',
    status: 0,
  };
  dataSaveTeacher: TeacherModel = new TeacherModel();
  query = {
    filter: '',
    offSet: 0,
    pageSize: 10,
  };
  selectedCategory: any;
  submited = false;
  ngOnInit(): void {
    this.items = [
      { label: 'Quản trị' },
      { label: 'Giáo viên', routerLink: '/trang-chu/giao-vien' },
      { label: 'Thêm mới giáo viên' },
    ];
  }

  onSave(dataSave: any) {
    this.spinner.show();
    this.submited = true;
    if (dataSave.invalid) {
      return;
    }
    this.dataSaveTeacher.fullName = this.teacher.fullName
    this.dataSaveTeacher.avatar = this.teacher.avatar
    this.dataSaveTeacher.order = this.teacher.order
    this.dataSaveTeacher.descriptionShort = this.teacher.descriptionShort
    this.dataSaveTeacher.description = this.teacher.description
    console.log("Thêm giao viên", this.dataSaveTeacher )
    this.apiService.postTeacher(this.dataSaveTeacher).subscribe({
      next: (response) => {
        if (response.Status === 'success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Thông báo',
            detail: 'Thêm thành công',
          });
          this.router.navigate([`/giao-vien/chi-tiet-giao-vien/${response.Data}`])  
          this.spinner.hide();
        }
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Thông báo',
          detail: 'Thêm thất bại',
        });
      },
    }); 
  }

  showLibraryDialog(): void {
    this.showLibrary = true;
  }

  selectedImg(event: any) {
    this.showLibrary = false;
    this.teacher.avatar = event;
  }
}
