import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomarRegComponent } from './customar-reg.component';

describe('CustomarRegComponent', () => {
  let component: CustomarRegComponent;
  let fixture: ComponentFixture<CustomarRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomarRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomarRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
