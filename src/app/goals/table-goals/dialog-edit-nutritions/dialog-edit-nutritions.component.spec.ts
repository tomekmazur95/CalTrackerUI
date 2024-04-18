import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditNutritionsComponent } from './dialog-edit-nutritions.component';

describe('DialogEditNutritionsComponent', () => {
  let component: DialogEditNutritionsComponent;
  let fixture: ComponentFixture<DialogEditNutritionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEditNutritionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditNutritionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
