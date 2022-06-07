import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLiTinTucComponent } from './quan-li-tin-tuc.component';

describe('QuanLiTinTucComponent', () => {
  let component: QuanLiTinTucComponent;
  let fixture: ComponentFixture<QuanLiTinTucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLiTinTucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLiTinTucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
