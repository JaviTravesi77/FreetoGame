import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlataformasPageRoutingModule } from './plataformas-routing.module';

import { PlataformasPage } from './plataformas.page';
import { PipePipe } from './pipe.pipe';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlataformasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PlataformasPage, PipePipe]
})
export class PlataformasPageModule {}
