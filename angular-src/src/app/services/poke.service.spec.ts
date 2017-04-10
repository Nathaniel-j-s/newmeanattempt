/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokeService } from './poke.service';

describe('PokeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeService]
    });
  });

  it('should ...', inject([PokeService], (service: PokeService) => {
    expect(service).toBeTruthy();
  }));
});
