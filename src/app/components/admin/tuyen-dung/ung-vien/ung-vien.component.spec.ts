import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UngVienComponent } from './ung-vien.component';

describe('UngVienComponent', () => {
  let component: UngVienComponent;
  let fixture: ComponentFixture<UngVienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UngVienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UngVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
