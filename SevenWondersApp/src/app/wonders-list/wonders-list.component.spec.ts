import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WondersListComponent } from './wonders-list.component';

describe('WondersListComponent', () => {
  let component: WondersListComponent;
  let fixture: ComponentFixture<WondersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WondersListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WondersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
