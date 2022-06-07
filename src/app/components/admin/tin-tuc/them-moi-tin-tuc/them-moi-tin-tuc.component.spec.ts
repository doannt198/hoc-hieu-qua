import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiTinTucComponent } from './them-moi-tin-tuc.component';

describe('ThemMoiTinTucComponent', () => {
  let component: ThemMoiTinTucComponent;
  let fixture: ComponentFixture<ThemMoiTinTucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemMoiTinTucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiTinTucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
