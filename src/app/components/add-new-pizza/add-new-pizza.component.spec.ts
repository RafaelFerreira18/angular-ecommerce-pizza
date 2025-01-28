import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPizzaComponent } from './add-new-pizza.component';

describe('AddNewPizzaComponent', () => {
  let component: AddNewPizzaComponent;
  let fixture: ComponentFixture<AddNewPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewPizzaComponent]
    });
    fixture = TestBed.createComponent(AddNewPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
