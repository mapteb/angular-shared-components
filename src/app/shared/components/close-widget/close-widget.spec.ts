import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseWidget } from './close-widget';

describe('CloseWidget', () => {
  let component: CloseWidget;
  let fixture: ComponentFixture<CloseWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(CloseWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
