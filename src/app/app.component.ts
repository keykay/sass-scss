import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme = 'light-theme';
  themeSwitcher = 0; // 0 light 1 dark

  toggleTheme() {
    this.themeSwitcher = (this.themeSwitcher + 1) % 2;
    if (this.themeSwitcher === 0) {
      this.theme = 'light-theme';
    } else {
      this.theme = 'dark-theme';
    }
  }
}
