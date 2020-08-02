import { Injectable } from "@angular/core";
import { Theme, light, dark } from "../models/Theme"
@Injectable({
  providedIn: "root"
})
export class ThemeService {
  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  private setActiveTheme(theme: Theme): void {
    Object.keys(theme.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        theme.properties[property]
      );
    });
  }
}
