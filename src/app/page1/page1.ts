import { Component } from '@angular/core';
import { PanelComp } from '../shared/components/panel-comp/panel-comp';

@Component({
  selector: 'app-page1',
  imports: [PanelComp],
  templateUrl: './page1.html',
  styleUrl: './page1.css'
})
export class Page1 {
  isPanelVisible = true;
  panelBodyText = 'Panel body text set by Page1 component.';

  constructor() {
    console.log('>> loading page1');
  }

  closePanel() {
    this.isPanelVisible = false;
  }
}
