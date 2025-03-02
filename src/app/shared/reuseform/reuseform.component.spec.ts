import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseformComponent } from './reuseform.component';

describe('ReuseformComponent', () => {
  let component: ReuseformComponent;
  let fixture: ComponentFixture<ReuseformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReuseformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
