import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelComp } from './panel-comp';

describe('PanelComp', () => {
  let component: PanelComp;
  let fixture: ComponentFixture<PanelComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelComp],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
