import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { ItemList } from './components/item-list/item-list';
import { ItemDetail } from './components/item-detail/item-detail';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'shop',
    component: ItemList
  },

  {
    path: 'item/:code',
    component: ItemDetail
  }

];