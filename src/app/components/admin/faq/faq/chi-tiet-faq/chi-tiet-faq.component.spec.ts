import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietFaqComponent } from './chi-tiet-faq.component';

describe('ChiTietFaqComponent', () => {
  let component: ChiTietFaqComponent;
  let fixture: ComponentFixture<ChiTietFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiTietFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
