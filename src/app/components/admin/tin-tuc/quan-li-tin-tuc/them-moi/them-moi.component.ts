import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-moi',
  templateUrl: './them-moi.component.html',
  styleUrls: ['./them-moi.component.scss']
})
export class ThemMoiComponent implements OnInit {

  constructor() { }
  items: any;
  UrlImg = '';
  showLibrary = false;
  val: number = 5;
  ngOnInit(): void {
    this.items = [
      { label: 'Quản trị'},
      { label: 'Tin tức'},
      { label: 'Chi tiết tin tức'},
    ]
  }

  showLibraryDialog() {
    this.showLibrary = true
  }

  selectedImages(event: any) {
    this.showLibrary = false
    this.UrlImg = event
  }

}
