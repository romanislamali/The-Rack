import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudproductComponent } from './crudproduct.component';

describe('CrudproductComponent', () => {
  let component: CrudproductComponent;
  let fixture: ComponentFixture<CrudproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
