import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnilComponent } from './anil/anil.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { PraneethComponent } from './praneeth/praneeth.component';

const routes: Routes = [
  {path:'anil', component: AnilComponent},
  {path:'anil/:name', component: AnilComponent},
  {path: 'praneeth', component:PraneethComponent},
  {path: 'praneeth/:name', component:PraneethComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
