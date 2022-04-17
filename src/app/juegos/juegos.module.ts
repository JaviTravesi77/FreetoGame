import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegosPageRoutingModule } from './juegos-routing.module';

import { JuegosPage } from './juegos.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [JuegosPage]
})
export class JuegosPageModule {}
