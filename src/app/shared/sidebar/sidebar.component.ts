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
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
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
                icon: 'pi pi-list',
                routerLink: '/danh-muc-tin-tuc'
              },
              {
                label: 'Bài viết',
                icon: 'pi pi-copy',
                routerLink: '/quan-li-tin-tuc'
              }
            ]
           },
          { label: 'Tuyển dụng',
            icon: 'pi pi-sun',
            items: [
              { 
                label: 'Tin tuyển dụng',
                icon: 'pi pi-tags',
                routerLink: '/quan-li-tuyen-dung'
              },
              {
                label: 'Ứng viên',
                icon: 'pi pi-users',
                routerLink: '/ung-vien'
              }
            ]
          },
          { 
            label: 'Tài khoản',
            icon: 'pi pi-users',
            routerLink: '/tai-khoan'
          },
          { label: 'Trang chủ', icon: 'pi pi-bookmark' },
          { label: 'FAQ', icon: 'pi pi-comments', routerLink: '/faq' },
          { label: 'Trò chơi', icon: 'pi pi-discord' },
          { label: 'Thư viện', icon: 'pi pi-chart-bar', routerLink: 'quan-li-thu-vien' },
          { label: 'Slider', icon: 'pi pi-image', routerLink: '/slider' },
          { label: 'Giáo viên', icon: 'pi pi-user-plus', routerLink: '/giao-vien' },
          { label: 'Lớp học', icon: 'pi pi-microsoft', routerLink: '/lop-hoc' },
          { label: 'Môn học', icon: 'pi pi-th-large', routerLink: '/mon-hoc' },
          { label: 'Bài kiểm tra', icon: 'pi pi-server', routerLink: '/bai-kiem-tra' }
        ],
      },
    ];
  }
}
