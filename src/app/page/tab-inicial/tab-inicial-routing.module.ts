import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInicialPage } from './tab-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: TabInicialPage,
    children: [
      {
        path: 'Personal',
        loadChildren: () => import('./../../page/ofertas/ofertas.module').then( m => m.OfertasPageModule)
      },
      {
        path: 'Procedencia',
        loadChildren: () => import('./../../page/productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: 'Metas',
        loadChildren: () => import('./../../page/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInicialPageRoutingModule {}
