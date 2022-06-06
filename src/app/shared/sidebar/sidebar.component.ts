import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService
  ) {}
  items: any;
  ngOnInit(): void {
    this.items = [
      {
        label: 'Tài khoản',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Thông báo',
            icon: 'pi pi pi-shield'
          },
          { label: 'Hồ sơ cá nhân',
            icon: 'pi pi-user-plus'  
          },
          { label: 'Tài liệu',
            icon: 'pi pi-file' 
          },
          { label: 'Cài đặt',
             icon: 'pi pi-cog' 
          },
          { label: 'Hồ sơ điện tử',
            icon: 'pi pi-envelope' 
          },
          { label: 'Nội dung chia sẻ',
            icon: 'pi pi-link'  
           },
          { label: 'Thông báo toàn cầu',
            icon: 'pi pi-globe' 
           },
        ],
      },
      {
        label: 'Môn học',
        icon: 'pi pi-book',
      },
      {
        label: 'Hộp thư đến',
        icon: 'pi pi-comments'
      },
      {
        label: 'Giúp đỡ',
        icon: 'pi pi-info-circle',
      },
      {
        label: 'Quản trị',
        icon: 'pi pi-cog',
        items: [
          { 
            label: 'Tài khoản',
            icon: 'pi pi-users',
            items: [
              { 
                label: 'Giáo viên',
                icon: 'pi pi-user-plus',
                routerLink: '/giao-vien'
              },
              {
                label: 'Học sinh',
                icon: 'pi pi-user',
                routerLink: '/hoc-sinh'
              }
            ]
          },
          { label: 'Menu', 
            icon: 'pi pi-sliders-h',
            items: [
              { 
                label: 'Menu người dùng',
                icon: 'pi pi-server',
                routerLink:'/menu-nguoi-dung'
              },
              {
                label: 'Menu quản trị',
                icon: 'pi pi-list',
                routerLink: '/menu-quan-tri'
              }
            ] 
          },
          { 
            label: 'Tin tức',
            icon: 'pi pi-sun',
            items: [
              { 
                label: 'Danh mục',
                icon: 'pi pi-list'
              },
              {
                label: 'Bài viết',
                icon: 'pi pi-copy'
              }
            ]
           },
          { label: 'Tuyển dụng',
            icon: 'pi pi-sun',
            items: [
              { 
                label: 'Tin tuyển dụng',
                icon: 'pi pi-tags'
              },
              {
                label: 'Ứng viên',
                icon: 'pi pi-users'
              }
            ]
          },
          { label: 'Trang chủ', icon: 'pi pi-bookmark' },
          { label: 'FAQ', icon: 'pi pi-comments' },
          { label: 'Trò chơi', icon: 'pi pi-discord' },
          { label: 'Thư viện', icon: 'pi pi-chart-bar' },
          { label: 'Slider', icon: 'pi pi-image' },
          { label: 'Giáo viên', icon: 'pi pi-user-plus' },
          { label: 'Lớp học', icon: 'pi pi-microsoft' },
          { label: 'Môn học', icon: 'pi pi-th-large' },
          { label: 'Bài kiểm tra', icon: 'pi pi-server' }
        ],
      },
    ];
  }
}
