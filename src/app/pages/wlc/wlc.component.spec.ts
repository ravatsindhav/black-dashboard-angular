/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WlcComponent } from './wlc.component';

describe('WlcComponent', () => {
  let component: WlcComponent;
  let fixture: ComponentFixture<WlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
