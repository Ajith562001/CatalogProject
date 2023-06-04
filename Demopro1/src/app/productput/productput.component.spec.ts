import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductputComponent } from './productput.component';

describe('ProductputComponent', () => {
  let component: ProductputComponent;
  let fixture: ComponentFixture<ProductputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
