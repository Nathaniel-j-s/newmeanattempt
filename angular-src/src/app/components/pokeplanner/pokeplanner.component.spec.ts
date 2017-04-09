/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PokeplannerComponent } from './pokeplanner.component';

describe('PokeplannerComponent', () => {
  let component: PokeplannerComponent;
  let fixture: ComponentFixture<PokeplannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeplannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
