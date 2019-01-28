import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'm',
    component: TabsPage,
    children: [
      {
        path: 'timeline',
        loadChildren: '../timeline/timeline.module#TimelinePageModule'
      },
      {
        path: 'favorites',
        loadChildren: '../favorites/favorites.module#FavoritesPageModule'
      },
      {
        path: '',
        redirectTo: '/m/timeline',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/m/timeline',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
