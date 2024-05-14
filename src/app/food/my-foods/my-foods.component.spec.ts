import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFoodsComponent } from './my-foods.component';

describe('MyFoodsComponent', () => {
  let component: MyFoodsComponent;
  let fixture: ComponentFixture<MyFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyFoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
