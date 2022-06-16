import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { TeacherModel } from 'src/app/model/teacher.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-chi-tiet-giao-vien',
  templateUrl: './chi-tiet-giao-vien.component.html',
  styleUrls: ['./chi-tiet-giao-vien.component.scss']
})
export class ChiTietGiaoVienComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private messageService: MessageService, 
    private router: ActivatedRoute,
    private spinner: NgxSpinnerService 
  ) {}
  private readonly unsubscribe$: Subject<void> = new Subject();
  items: any;
  showLibrary = false;
  Id=0;
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
    status: 1,
  };
  dataSaveTeacher: TeacherModel = new TeacherModel();
  query = {
    filter: '',
    offSet: 0,
    pageSize: 10,
  };
  dataDetail:any
  submited = false; 
  ngOnInit(): void {
    this.items = [
      { label: 'Quản trị' },
      { label: 'Giáo viên', routerLink: '/giao-vien' },
      { label: 'Thêm mới giáo viên' },
    ];
  this.Id = this.router.snapshot.params.id
  this.getDetailTeacher(this.Id)
  }

  getDetailTeacher(Id: any) {
    this.spinner.show();
    this.apiService.getDetailTeacher(Id)
    .pipe()
    .subscribe({
        next: (response) => {
            this.dataDetail = response.Data
            this.teacher = {...this.dataDetail}
            this.teacher.fullName = this.dataDetail.FullName
            this.teacher.avatar =this.dataDetail.Avatar
            this.teacher.order = this.dataDetail.Order
            this.teacher.descriptionShort = this.dataDetail.DescriptionShort
            this.teacher.description = this.dataDetail.Description
            this.spinner.hide()
        },
        error: (error) => {
          console.error(error)
        }
    })
  }
   onSave(dataSave: any) {
     this.spinner.show();
    this.submited = true;
    if (dataSave.invalid) {
      return;
    }
    this.spinner
    this.dataSaveTeacher = {...this.teacher}
    this.apiService.postTeacher(this.dataSaveTeacher).subscribe({
      next: (response) => {
        if (response.Status === 'success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Thông báo',
            detail: 'Cập nhật thành công',
          });
        }
        this.spinner.hide()
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Thông báo',
          detail: 'Cập nhật thất bại',
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
  
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
