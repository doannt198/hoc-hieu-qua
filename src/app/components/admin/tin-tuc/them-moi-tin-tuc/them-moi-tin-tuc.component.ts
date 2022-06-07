import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-moi-tin-tuc',
  templateUrl: './them-moi-tin-tuc.component.html',
  styleUrls: ['./them-moi-tin-tuc.component.scss']
})
export class ThemMoiTinTucComponent implements OnInit {

  constructor() { }
  items :any;
  show: any;
  ngOnInit(): void {
    this.items = [
      {label:'Quản trị'},
      {label:'Tin tức', routerLink: '/danh-muc-tin-tuc'},
      {label:'Chi tiết tin tức'},
  ];
  }
}
