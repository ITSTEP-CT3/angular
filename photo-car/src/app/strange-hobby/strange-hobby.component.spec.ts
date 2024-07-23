import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrangeHobbyComponent } from './strange-hobby.component';

describe('StrangeHobbyComponent', () => {
  let component: StrangeHobbyComponent;
  let fixture: ComponentFixture<StrangeHobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrangeHobbyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrangeHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
