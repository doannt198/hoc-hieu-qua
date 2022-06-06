import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNguoiDungComponent } from './menu-nguoi-dung.component';

describe('MenuNguoiDungComponent', () => {
  let component: MenuNguoiDungComponent;
  let fixture: ComponentFixture<MenuNguoiDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNguoiDungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
