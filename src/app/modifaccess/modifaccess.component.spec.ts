import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifaccessComponent } from './modifaccess.component';

describe('ModifaccessComponent', () => {
  let component: ModifaccessComponent;
  let fixture: ComponentFixture<ModifaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
