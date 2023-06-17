import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverViewComponent } from './product-over-view.component';

describe('ProductOverViewComponent', () => {
  let component: ProductOverViewComponent;
  let fixture: ComponentFixture<ProductOverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOverViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
