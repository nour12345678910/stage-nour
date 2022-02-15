import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthadminComponent } from './authadmin.component';

describe('AuthadminComponent', () => {
  let component: AuthadminComponent;
  let fixture: ComponentFixture<AuthadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
