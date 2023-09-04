import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './cats.component';
import { TitleComponent } from './containers/title/title.component';
import { IconComponent } from './components/icon/icon.component';
import { HeaderComponent } from './containers/header/header.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { ToggleContainerComponent } from './containers/toggle-container/toggle-container.component';
import { CatsContainerComponent } from './containers/cats-container/cats-container.component';
import { FooterComponent } from './containers/footer/footer.component';
import { CatFactsContainerComponent } from './containers/cat-facts-container/cat-facts-container.component';
import { PoweredByComponent } from './containers/powered-by/powered-by.component';


@NgModule({
  declarations: [CatsComponent, TitleComponent, IconComponent, HeaderComponent, ToggleButtonComponent, ToggleContainerComponent, CatsContainerComponent, FooterComponent, CatFactsContainerComponent, PoweredByComponent],
  imports: [
    CommonModule,
    FormsModule,
    CatsRoutingModule,
  ]
})
export class CatsModule { }
