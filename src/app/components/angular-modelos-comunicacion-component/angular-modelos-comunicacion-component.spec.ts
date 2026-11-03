import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularModelosComunicacionComponent } from './angular-modelos-comunicacion-component';

describe('AngularModelosComunicacionComponent', () => {
  let component: AngularModelosComunicacionComponent;
  let fixture: ComponentFixture<AngularModelosComunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularModelosComunicacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularModelosComunicacionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
