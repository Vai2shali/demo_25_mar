import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatCrudComponent } from './templat-crud.component';

describe('TemplatCrudComponent', () => {
  let component: TemplatCrudComponent;
  let fixture: ComponentFixture<TemplatCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
