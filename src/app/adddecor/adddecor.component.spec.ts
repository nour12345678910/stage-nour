import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddecorComponent } from './adddecor.component';

describe('AdddecorComponent', () => {
  let component: AdddecorComponent;
  let fixture: ComponentFixture<AdddecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddecorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
