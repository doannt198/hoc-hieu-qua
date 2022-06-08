import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiTuyenDungComponent } from './them-moi-tuyen-dung.component';

describe('ThemMoiTuyenDungComponent', () => {
  let component: ThemMoiTuyenDungComponent;
  let fixture: ComponentFixture<ThemMoiTuyenDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemMoiTuyenDungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiTuyenDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
