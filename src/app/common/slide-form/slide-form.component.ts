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
    Name: '',
    Screen: '',
    Order: 0,
    Status: false,
    ImageUrl: null
  };
  @Input() selectSlider: any = null;
  @Output() loadSlider = new EventEmitter<any>();
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectSlider && this.selectSlider && this.selectSlider.Id) {
       this.apiService
        .getListDetailSlider(this.selectSlider.Id)
        .subscribe({
          next: (response) => {
          this.detail = response.Data;
          this.detail.Status = this.detail.Status == 1 ? true : false
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
    this.detail.ImageUrl = event;
  }

  onSaveSlider(dataForm: any): void {
    this.submited = true;
    if (dataForm.invalid) {
      return;
    }
    const dataSave = {...this.detail};
    dataSave.Status = dataSave.Status ? 1 : 0;
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
