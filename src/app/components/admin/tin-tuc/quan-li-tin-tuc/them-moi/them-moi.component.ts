import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-moi',
  templateUrl: './them-moi.component.html',
  styleUrls: ['./them-moi.component.scss']
})
export class ThemMoiComponent implements OnInit {

  constructor() { }
  items: any
  ngOnInit(): void {
    this.items = [
      
    ]
  }
}
