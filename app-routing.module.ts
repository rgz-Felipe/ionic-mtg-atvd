// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsPage } from './cartoes/cartoes.page';
import { CardDetailsPage } from './detalhes/detalhes.page';

const routes: Routes = [
  {
    path: 'cards',
    component: CardsPage,
  },
  {
    path: 'card-details/:id',
    component: CardDetailsPage,
  },
  {
    path: '',
    redirectTo: '/cards',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
