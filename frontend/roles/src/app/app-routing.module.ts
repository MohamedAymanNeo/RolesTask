import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './roles/list/list.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';


const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'add', component: AddRoleComponent},
  {path: 'edit', component: EditRoleComponent},
  {path: '**', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
