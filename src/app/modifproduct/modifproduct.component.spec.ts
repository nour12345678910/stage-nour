import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifproductComponent } from './modifproduct.component';

describe('ModifproductComponent', () => {
  let component: ModifproductComponent;
  let fixture: ComponentFixture<ModifproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
