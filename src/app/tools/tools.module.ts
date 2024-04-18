import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ShowIpComponent } from './show-ip/component/show-ip.component';
import { ShowDateTimeComponent } from './showdatetime/component/showdatetime.component';

import * as fr from '@angular/common/locales/fr';


@NgModule({
  declarations: [
    ShowIpComponent,
    ShowDateTimeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }]
})
export class ToolsModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
