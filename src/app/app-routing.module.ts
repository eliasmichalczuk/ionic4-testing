import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  {
    path: '',
    loadChildren: './timeline/timeline.module#TimelinePageModule'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
