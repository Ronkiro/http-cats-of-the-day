import { Injectable } from '@angular/core';
import { ThemeService } from '@shared/theme/services/theme.service'
import { ThemeState } from '@shared/theme/services/theme-state.service'

@Injectable()
export class ThemeFacade {

  constructor(private service: ThemeService,
              private state: ThemeState) { }

  toggleTheme(): void {
    if (this.state.isLightThemeActive()) {
      this.state.setDarkTheme();
      this.service.setDarkTheme();
    }
    else {
      this.state.setLightTheme();
      this.service.setLightTheme();
    }
  }
}
