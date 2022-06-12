import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiFaqComponent } from './them-moi-faq.component';

describe('ThemMoiFaqComponent', () => {
  let component: ThemMoiFaqComponent;
  let fixture: ComponentFixture<ThemMoiFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemMoiFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
