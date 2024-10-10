import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreegridIssueComponent } from './treegrid-issue/treegrid-issue.component';

const routes: Routes = [
  { path: 'first-component', component: TreegridIssueComponent }
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
