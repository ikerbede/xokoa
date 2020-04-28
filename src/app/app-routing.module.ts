import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeNamesComponent } from './code-names/code-names.component';
import { EuskaraComponent } from './euskara/euskara.component';

const routes: Routes = [
  { path: 'euskara', component: EuskaraComponent },
  { path: 'code-names', component: CodeNamesComponent },
  { path: '', redirectTo: '/euskara', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
