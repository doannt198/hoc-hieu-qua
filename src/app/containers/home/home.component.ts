import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private messageService: MessageService,
    private apiService: ApiService
  ) { }
  login: any = {
    username : '',
    password : ''
  }
  submited = false
  ngOnInit(): void {
  }

  logginform(loginForm: any ) {
    
    this.submited = true
    if(loginForm.invalid) {
          return;
    }
   if(this.login.username && this.login.password ) {
    this.apiService.apiAuthentication(this.login)
    .subscribe(results => {
      console.log("authentication", results)
      if(results.Status ==="success") {
        this.messageService.add({severity: results.Status , summary:'Thông báo', detail: results.Message || "Đăng nhập thành công" })
        this.router.navigateByUrl('/trang-chu/tai-khoan')
      } else{
        this.messageService.add({severity: results.Status , summary:'Thông báo', detail: results.Message || "Đăng nhập thành công" })
      }
    })
    
   }
  }
}
