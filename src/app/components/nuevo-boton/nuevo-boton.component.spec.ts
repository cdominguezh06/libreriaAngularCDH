import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoBotonComponent } from './nuevo-boton.component';

describe('NuevoBotonComponent', () => {
  let component: NuevoBotonComponent;
  let fixture: ComponentFixture<NuevoBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoBotonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
