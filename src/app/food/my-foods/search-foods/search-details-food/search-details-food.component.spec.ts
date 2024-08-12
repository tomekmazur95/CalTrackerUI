import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailsFoodComponent } from './search-details-food.component';

describe('SearchDetailsFoodComponent', () => {
  let component: SearchDetailsFoodComponent;
  let fixture: ComponentFixture<SearchDetailsFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchDetailsFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchDetailsFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
