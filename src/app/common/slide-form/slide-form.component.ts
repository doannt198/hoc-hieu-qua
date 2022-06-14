import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { SliderModel } from 'src/app/model/slider.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-slide-form',
  templateUrl: './slide-form.component.html',
  styleUrls: ['./slide-form.component.scss']
})
export class SlideFormComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) { }
  showLibrary = false;
  UrlImg: any = null;
  submited = false;
  Name: any;
  Screen: any;
  Order: any;
  Status: any;
  cvStatus: any;
  cvStatusDetail: any;
  @Output() loadSlider = new EventEmitter<any>()
  dataSave: SliderModel = new SliderModel();
  ngOnInit(): void {
   
  }

  selectedImg(event: any): void {
    this.showLibrary = false;
    this.UrlImg = event;
  }

  onSaveSlider(dataSave: any): void {
  this.submited = true;
    if (dataSave.invalid) {
      return;
    }
    if (this.Status == true) {
      this.cvStatus = 1;
    } else {
      this.cvStatus = 0;
    }
    this.dataSave.name = this.Name;
    this.dataSave.imageUrl = this.UrlImg;
    this.dataSave.status = this.cvStatus;
    this.dataSave.order = this.Order;
    this.dataSave.screen = this.Screen;
    this.apiService.postSlider(this.dataSave).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Thông báo',
          detail: 'Thêm thành công',
        });
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
