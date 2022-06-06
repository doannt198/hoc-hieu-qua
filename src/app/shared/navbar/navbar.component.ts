import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: any
  constructor() { }
  
  ngOnInit(): void {
    this.items =[
      {label: 'Thông tin cá nhân', icon: 'pi pi-users' },
      {label: 'Khoá học của tôi', icon: 'pi pi-book' },
      {label: 'Quá trình học tập', icon: 'pi pi-chart-pie' },
      {label: 'Kích hoạt khoá học', icon: 'pi pi-key' },
      {label: 'Lịch sử kích hoạt', icon: 'pi pi-clock' },
      {label: 'Đăng xuất', icon: 'pi pi-sign-out' }
    ]
  }

}
