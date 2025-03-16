import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarBotonesComponent } from './comprar-botones.component';

describe('ComprarBotonesComponent', () => {
  let component: ComprarBotonesComponent;
  let fixture: ComponentFixture<ComprarBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprarBotonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
