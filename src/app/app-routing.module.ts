import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';


const routes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule', data: { withoutHeader: true } },
  { path: 'users/:id', loadChildren: './modules/user/user.module#UserModule' },
  { path: 'winners' , loadChildren: './modules/winner/winners.module#WinnersModule' },
  { path: 'news' , loadChildren: './modules/news/modules/news-feed.module#NewsFeedModule'},
  { path: '', loadChildren: './modules/home/home.module#HomeModule' , canActivate: [AuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
