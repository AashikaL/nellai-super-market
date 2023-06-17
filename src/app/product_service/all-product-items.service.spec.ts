import { TestBed } from '@angular/core/testing';

import { AllProductItemsService } from './all-product-items.service';

describe('AllProductItemsService', () => {
  let service: AllProductItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllProductItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
