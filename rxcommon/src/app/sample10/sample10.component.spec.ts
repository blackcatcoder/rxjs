import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample10Component } from './sample10.component';

describe('Sample10Component', () => {
  let component: Sample10Component;
  let fixture: ComponentFixture<Sample10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sample10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
