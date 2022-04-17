import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent],
  exports: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
})
export class ComponentsModule { }
