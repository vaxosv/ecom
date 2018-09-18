import { TestBed } from '@angular/core/testing';

import { FirebaseLService } from './firebase-l.service';

describe('FirebaseLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseLService = TestBed.get(FirebaseLService);
    expect(service).toBeTruthy();
  });
});
