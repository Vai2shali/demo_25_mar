import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsPorComponent } from './obs-por.component';

describe('ObsPorComponent', () => {
  let component: ObsPorComponent;
  let fixture: ComponentFixture<ObsPorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsPorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsPorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
