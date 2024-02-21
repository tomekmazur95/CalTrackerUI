import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsAddInfoComponent } from './goals-add-info.component';

describe('GoalsAddInfoComponent', () => {
  let component: GoalsAddInfoComponent;
  let fixture: ComponentFixture<GoalsAddInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalsAddInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalsAddInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
