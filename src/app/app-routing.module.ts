import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainTabelComponent } from './main-tabel/main-tabel.component';


const routes: Routes = [
  {path: '', component: MainTabelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
