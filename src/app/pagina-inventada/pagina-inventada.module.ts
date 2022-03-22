import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaInventadaPageRoutingModule } from './pagina-inventada-routing.module';

import { PaginaInventadaPage } from './pagina-inventada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaInventadaPageRoutingModule
  ],
  declarations: [PaginaInventadaPage]
})
export class PaginaInventadaPageModule {}
