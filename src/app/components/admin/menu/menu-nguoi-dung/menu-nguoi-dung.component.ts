import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nguoi-dung',
  templateUrl: './menu-nguoi-dung.component.html',
  styleUrls: ['./menu-nguoi-dung.component.scss']
})
export class MenuNguoiDungComponent implements OnInit {

  constructor() { }
  cities:any[]=[]
  selectedStatus: any
  val: any
  displayModal: boolean;

  ngOnInit(): void {
    this.cities = [
      { name: 'Tất cả' },
      { name: 'Trang chủ' },
      { name: 'Quản trị' }
    ]
  }
  showModalDialog() {
    this.displayModal = true;
}
}
