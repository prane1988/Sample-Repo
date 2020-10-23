import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraneethComponent } from './praneeth.component';

describe('PraneethComponent', () => {
  let component: PraneethComponent;
  let fixture: ComponentFixture<PraneethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraneethComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraneethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
