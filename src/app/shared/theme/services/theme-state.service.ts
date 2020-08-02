import { Injectable } from '@angular/core';
import { Theme, light, dark } from "../models/Theme"

@Injectable({
  providedIn: 'root'
})
export class ThemeState {

  private activeTheme: Theme = dark;

  constructor() { }

  public isLightThemeActive() : boolean {
    return this.activeTheme.name === light.name;
  }

  public isDarkThemeActive() : boolean {
    return this.activeTheme.name === dark.name;
  }

  public setDarkTheme() {
    this.setTheme(dark);
  }

  public setLightTheme() {
    this.setTheme(light);
  }

  private setTheme(theme: Theme) {
    this.activeTheme = theme;
  }
}
