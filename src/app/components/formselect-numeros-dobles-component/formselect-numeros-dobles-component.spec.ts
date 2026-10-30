import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormselectNumerosDoblesComponent } from './formselect-numeros-dobles-component';

describe('FormselectNumerosDoblesComponent', () => {
  let component: FormselectNumerosDoblesComponent;
  let fixture: ComponentFixture<FormselectNumerosDoblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormselectNumerosDoblesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormselectNumerosDoblesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
