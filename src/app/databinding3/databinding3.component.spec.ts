import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Databinding3Component } from './databinding3.component';

describe('Databinding3Component', () => {
  let component: Databinding3Component;
  let fixture: ComponentFixture<Databinding3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Databinding3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Databinding3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
