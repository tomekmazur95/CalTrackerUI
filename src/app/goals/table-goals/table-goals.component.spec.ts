import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGoalsComponent } from './table-goals.component';

describe('TableGoalsComponent', () => {
  let component: TableGoalsComponent;
  let fixture: ComponentFixture<TableGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableGoalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
