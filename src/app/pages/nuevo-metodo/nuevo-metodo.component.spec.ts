import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMetodoComponent } from './nuevo-metodo.component';

describe('NuevoMetodoComponent', () => {
  let component: NuevoMetodoComponent;
  let fixture: ComponentFixture<NuevoMetodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoMetodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoMetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
