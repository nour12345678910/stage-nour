import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccessoriesComponent } from './addaccessories.component';

describe('AddaccessoriesComponent', () => {
  let component: AddaccessoriesComponent;
  let fixture: ComponentFixture<AddaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
