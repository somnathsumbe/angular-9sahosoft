import { TestBed } from '@angular/core/testing';

import { BookinmemoryService } from './bookinmemory.service';

describe('BookinmemoryService', () => {
  let service: BookinmemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookinmemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
