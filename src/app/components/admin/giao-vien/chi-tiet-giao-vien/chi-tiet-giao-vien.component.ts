import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
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
    private messageService: MessageService
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
      { label: 'Giáo viên', routerLink: '/giao-vien' },
      { label: 'Thêm mới giáo viên' },
    ];
   
  }

  onSave(dataSave: any) {
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
