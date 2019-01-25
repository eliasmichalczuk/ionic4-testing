import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPage } from './post/post.page';
import { TimelinePage } from './timeline.page';
import { PostPageModule } from './post/post.module';

const routes: Routes = [
  {
    path: '',
    component: TimelinePage,
    children: [
      {
        path: ':postId',
        children: [
          {
            path: '',
            component: PostPageModule
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TimelineRoutingModule {}
