import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import  { WinnersComponent} from "../winners/winners.component";

const routes: Routes = [
  { path: '', component: WinnersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WinnersRoutingModule { }
