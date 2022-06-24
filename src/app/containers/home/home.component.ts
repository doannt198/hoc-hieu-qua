import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private messageService: MessageService
  ) { }
  login: any = {
    username : '',
    password : ''
  }
  submited = false
  ngOnInit(): void {
  }

  logginform(loginForm: any ) {
    console.log(this.login)
    this.submited = true
    if(loginForm.invalid) {
          return;
    }
    if(this.login.username==="admin" && this.login.password==="123456"){
      this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Đăng nhập thành công'})
      this.router.navigateByUrl('/trang-chu/tai-khoan')
    } else if(this.login.username==="" && this.login.password==="") {
      this.messageService.add({severity: 'error', summary: 'Thông báo', detail: 'Vui lòng nhập tên tài khoản và mật khẩu'})
    } else {
      this.messageService.add({severity: 'error', summary: 'Thông báo', detail: 'Đăng nhập thất bại'})
    }
  }
}
