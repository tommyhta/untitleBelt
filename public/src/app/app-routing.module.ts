import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NewmovieComponent } from './newmovie/newmovie.component';
import { NewreviewComponent } from './newreview/newreview.component';

const routes: Routes = [
  {path: '', pathMatch:"full", redirectTo:'/movies' },
  {path: 'movies', component: HomeComponent, children:[
    {path: 'new', component: NewmovieComponent}
  ]},
  {path: 'movies/:id', component: DetailComponent, children:[
    {path: 'review', component: NewreviewComponent}
  ]},
  {path: '**', pathMatch:"full", redirectTo:'/movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
