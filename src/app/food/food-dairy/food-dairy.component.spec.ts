import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDairyComponent } from './food-dairy.component';

describe('FoodDairyComponent', () => {
  let component: FoodDairyComponent;
  let fixture: ComponentFixture<FoodDairyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodDairyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodDairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
