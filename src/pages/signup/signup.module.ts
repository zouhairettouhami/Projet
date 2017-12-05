import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import {WelcomeDeliveryPage} from "../welcome-delivery/welcome-delivery";
import {WelcomeUserPage} from "../welcome-user/welcome-user"

@NgModule({
  declarations: [
    SignupPage,
    WelcomeDeliveryPage,
    WelcomeUserPage
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
})
export class SignupPageModule {}
