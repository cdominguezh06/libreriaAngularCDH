import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusecardComponent } from './reusecard.component';

describe('ReusecardComponent', () => {
  let component: ReusecardComponent;
  let fixture: ComponentFixture<ReusecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReusecardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
