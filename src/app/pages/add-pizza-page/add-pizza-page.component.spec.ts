import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPizzaPageComponent } from './add-pizza-page.component';

describe('AddPizzaPageComponent', () => {
  let component: AddPizzaPageComponent;
  let fixture: ComponentFixture<AddPizzaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPizzaPageComponent]
    });
    fixture = TestBed.createComponent(AddPizzaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
