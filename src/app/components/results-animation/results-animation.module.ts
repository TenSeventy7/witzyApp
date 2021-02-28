import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
 
// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

import { ResultsAnimationComponent } from './results-animation.component';

@NgModule({
  imports: [ CommonModule, FormsModule, 
    LottieModule.forRoot({ player: playerFactory }), IonicModule ],
  declarations: [ResultsAnimationComponent],
  exports: [ResultsAnimationComponent]
})
export class ResultsAnimationComponentModule {}