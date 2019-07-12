import { TestBed } from '@angular/core/testing';

import { NgSService } from './ng-s-.service';

describe('NgSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgSService = TestBed.get(NgSService);
    expect(service).toBeTruthy();
  });
});
