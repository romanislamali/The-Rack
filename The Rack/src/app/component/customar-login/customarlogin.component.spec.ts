import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomarloginComponent } from './customarlogin.component';

describe('CustomarloginComponent', () => {
  let component: CustomarloginComponent;
  let fixture: ComponentFixture<CustomarloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomarloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomarloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
