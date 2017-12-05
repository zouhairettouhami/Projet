import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeDeliveryPage } from './welcome-delivery';

@NgModule({
  declarations: [
    WelcomeDeliveryPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeDeliveryPage),
  ],
})
export class WelcomeDeliveryPageModule {}
