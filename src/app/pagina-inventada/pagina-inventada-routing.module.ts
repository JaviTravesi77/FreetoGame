import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaInventadaPage } from './pagina-inventada.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaInventadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaInventadaPageRoutingModule {}
