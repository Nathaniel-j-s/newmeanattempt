/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PokepullComponent } from './pokepull.component';

describe('PokepullComponent', () => {
  let component: PokepullComponent;
  let fixture: ComponentFixture<PokepullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokepullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokepullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
