import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifclothesComponent } from './modifclothes.component';

describe('ModifclothesComponent', () => {
  let component: ModifclothesComponent;
  let fixture: ComponentFixture<ModifclothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifclothesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
