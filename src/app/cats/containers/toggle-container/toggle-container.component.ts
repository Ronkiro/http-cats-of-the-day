import { Component, OnInit } from '@angular/core';
import { ThemeFacade } from '@shared/theme/facades/theme-facade.service'
@Component({
  selector: 'app-toggle-container',
  templateUrl: './toggle-container.component.html',
  styleUrls: ['./toggle-container.component.scss'],
  providers: [ThemeFacade]
})
export class ToggleContainerComponent implements OnInit {

  constructor(private themeFacade: ThemeFacade) { }

  ngOnInit(): void {
  }

  handleToggleChange(isDark: boolean) {
    this.themeFacade.toggleTheme();
  }

}
