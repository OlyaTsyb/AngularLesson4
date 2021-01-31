import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {UserResolveService} from "./services/user-resolve.service";
import {FullUserComponent} from './components/full-user/full-user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { FullPostComponent } from './components/full-post/full-post.component';
import {PostResolveService} from "./services/post-resolve.service";


const routes: Routes = [{
  path: 'home', component: HomeComponent
},

  {
    path: 'users',
    component: UsersComponent,
    resolve: {usersData: UserResolveService},
    children: [{path: ':id', component: FullUserComponent}]


  },
  {
    path: 'posts',
    component: PostsComponent,
    resolve: {postData: PostResolveService},
    children: [{path: ':id', component: FullPostComponent}]
  }

];


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    FullUserComponent,
    PostsComponent,
    PostComponent,
    FullPostComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
