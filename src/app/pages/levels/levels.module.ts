import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelsPageRoutingModule } from './levels-routing.module';
import { LevelsPage } from './levels.page';

import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderComponentModule,
    LevelsPageRoutingModule
  ],
  declarations: [LevelsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LevelsPageModule {}
