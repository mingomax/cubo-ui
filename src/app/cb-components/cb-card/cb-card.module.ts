import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';

import {
  CbCardComponent,
  CbCardBadgesComponent,
  CbCardFooterComponent,
  CbCardTitleComponent,
  CbCardSubtitleComponent,
} from './cb-card.component';

@NgModule({
  exports: [
    CbCardComponent,
    CbCardBadgesComponent,
    CbCardFooterComponent,
    CbCardTitleComponent,
    CbCardSubtitleComponent,
  ],
  declarations: [
    CbCardComponent,
    CbCardBadgesComponent,
    CbCardFooterComponent,
    CbCardTitleComponent,
    CbCardSubtitleComponent,
  ],
  imports: [
    CoreModule
  ]
})
export class CbCardModule { }
