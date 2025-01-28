import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPizzaComponent } from './card-pizza.component';

describe('CardPizzaComponent', () => {
  let component: CardPizzaComponent;
  let fixture: ComponentFixture<CardPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPizzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
