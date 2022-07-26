import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
} from 'primeng/api';

import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-slide-form',
  templateUrl: './slide-form.component.html',
  styleUrls: ['./slide-form.component.scss'],
})
export class SlideFormComponent implements OnInit, OnChanges {
  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService
  ) {}

  showLibrary = false;
  submited = false;
  detail: any = {
    name: '',
    screen: '',
    order: 0,
    status: false,
    imageUrl: null
  };
  @Input() selectSlider: any = null;
  @Output() loadSlider = new EventEmitter<any>();
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectSlider && this.selectSlider && this.selectSlider.id) {
       this.apiService
        .getListDetailSlider(this.selectSlider.id)
        .subscribe({
          next: (response) => {
          this.detail = response.data;
          this.detail.status = this.detail.status == 1 ? true : false
          const covertArray = this.detail.screen
          this.detail.screen = covertArray.split(",")
          },
          error: (error) => {
            console.error(error);
          },
        }); 
    }
   /*  Khi input thay đổi giá trị */
  }

  ngOnInit(): void {}

  selectedImg(event: any): void {
    this.showLibrary = false;
    this.detail.imageUrl = event;
  }

  onSaveSlider(dataForm: any): void {
    this.submited = true;
    if (dataForm.invalid) {
      return;
    }
    const dataSave = {...this.detail};
    dataSave.status = dataSave.status ? 1 : 0;
    this.apiService.postSlider(dataSave).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Thông báo',
          detail: 'Thêm thành công',
        });
        this.spinner.hide();
        this.loadSlider.emit();
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
}
