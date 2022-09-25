import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample9Component } from './sample9.component';

describe('Sample9Component', () => {
  let component: Sample9Component;
  let fixture: ComponentFixture<Sample9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sample9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
