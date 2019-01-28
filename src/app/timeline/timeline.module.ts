import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimelinePage } from './timeline.page';
import { PostPage } from './post/post.page';
import { PostPageModule } from './post/post.module';
import { TimelineRoutingModule } from './timeline.router.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PostPageModule,
    TimelineRoutingModule,
    RouterModule
  ],
  //   RouterModule.forChild(
  //     [
  //       { path: '',
  //       component: TimelinePage
  //       },
  //       { path: ':postId',
  //       component: PostPage
  //       }
  //     ]
  //   )
  // ],
  declarations: [TimelinePage]
})
export class TimelinePageModule {}
