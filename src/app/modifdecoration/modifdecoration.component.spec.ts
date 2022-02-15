import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifdecorationComponent } from './modifdecoration.component';

describe('ModifdecorationComponent', () => {
  let component: ModifdecorationComponent;
  let fixture: ComponentFixture<ModifdecorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifdecorationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifdecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
