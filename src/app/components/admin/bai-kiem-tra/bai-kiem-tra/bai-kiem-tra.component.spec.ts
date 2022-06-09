import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiKiemTraComponent } from './bai-kiem-tra.component';

describe('BaiKiemTraComponent', () => {
  let component: BaiKiemTraComponent;
  let fixture: ComponentFixture<BaiKiemTraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiKiemTraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiKiemTraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
