import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuQuanTriComponent } from './menu-quan-tri.component';

describe('MenuQuanTriComponent', () => {
  let component: MenuQuanTriComponent;
  let fixture: ComponentFixture<MenuQuanTriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuQuanTriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuQuanTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
