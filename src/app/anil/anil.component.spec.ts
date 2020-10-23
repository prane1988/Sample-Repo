import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnilComponent } from './anil.component';

describe('AnilComponent', () => {
  let component: AnilComponent;
  let fixture: ComponentFixture<AnilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
