import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PanelComp } from '../shared/components/panel-comp/panel-comp';

@Component({
  selector: 'app-page2',
  imports: [PanelComp],
  templateUrl: './page2.html',
  styleUrl: './page2.css'
})
export class Page2 {
  isPanelVisible = true;
  panelBodyText = 'Panel body text set by Page2 component.';
  constructor() {
    console.log('>> loading page2');
  }

  closePanel() {
    this.isPanelVisible = false;
  }
}
