import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-powered-by',
  templateUrl: './powered-by.component.html',
  styleUrls: ['./powered-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoweredByComponent {}
