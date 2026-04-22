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

  constructor() {
    console.log('>> loading page1');
  }

  closePanel() {
    this.isPanelVisible = false;
  }
}
