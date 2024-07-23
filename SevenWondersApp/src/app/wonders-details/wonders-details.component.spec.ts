import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WondersDetailsComponent } from './wonders-details.component';

describe('WondersDetailsComponent', () => {
  let component: WondersDetailsComponent;
  let fixture: ComponentFixture<WondersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WondersDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WondersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
