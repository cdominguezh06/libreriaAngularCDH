import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarBotonComponent } from './modificar-boton.component';

describe('ModificarBotonComponent', () => {
  let component: ModificarBotonComponent;
  let fixture: ComponentFixture<ModificarBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarBotonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
