import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsonalInfoComponent } from './parsonal-info.component';

describe('ParsonalInfoComponent', () => {
  let component: ParsonalInfoComponent;
  let fixture: ComponentFixture<ParsonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParsonalInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParsonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
