import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { TophedingComponent } from './topheding/topheding.component';
import {BusinessnewsComponent} from './businessnews/businessnews.component'

const routes: Routes = [
  {path:'',component:TophedingComponent}, //home
  {path:'tech',component:TechnewsComponent}, //Tech News
  {path:'businessnews',component:BusinessnewsComponent}, //Tech News
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
