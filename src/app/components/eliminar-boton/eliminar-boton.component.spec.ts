import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarBotonComponent } from './eliminar-boton.component';

describe('EliminarBotonComponent', () => {
  let component: EliminarBotonComponent;
  let fixture: ComponentFixture<EliminarBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarBotonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
