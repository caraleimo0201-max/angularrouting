import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumeroDobleComponentComponent } from './numero-doble-component-component';

describe('NumeroDobleComponentComponent', () => {
  let component: NumeroDobleComponentComponent;
  let fixture: ComponentFixture<NumeroDobleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumeroDobleComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumeroDobleComponentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
