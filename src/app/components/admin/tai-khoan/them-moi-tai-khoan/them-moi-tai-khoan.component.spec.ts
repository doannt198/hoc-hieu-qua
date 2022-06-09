import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiTaiKhoanComponent } from './them-moi-tai-khoan.component';

describe('ThemMoiTaiKhoanComponent', () => {
  let component: ThemMoiTaiKhoanComponent;
  let fixture: ComponentFixture<ThemMoiTaiKhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemMoiTaiKhoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiTaiKhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
