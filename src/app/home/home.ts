import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PanelComp } from '../shared/components/panel-comp/panel-comp';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, PanelComp],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  isMenuVisible = true;
  isPanelVisible = true;

  toggleLeftMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  closePanel() {
    this.isPanelVisible = false;
  }

}
