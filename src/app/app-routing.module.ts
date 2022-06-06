import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiaoVienComponent } from './components/admin/tai-khoan/giao-vien/giao-vien.component';
import { HocSinhComponent } from './components/admin/tai-khoan/hoc-sinh/hoc-sinh.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children:[
      { path: 'giao-vien', component: GiaoVienComponent},
      { path: 'hoc-sinh', component: HocSinhComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
