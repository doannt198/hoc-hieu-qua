import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuNguoiDungComponent } from './components/admin/menu/menu-nguoi-dung/menu-nguoi-dung.component';
import { MenuQuanTriComponent } from './components/admin/menu/menu-quan-tri/menu-quan-tri.component';
import { GiaoVienComponent } from './components/admin/tai-khoan/giao-vien/giao-vien.component';
import { HocSinhComponent } from './components/admin/tai-khoan/hoc-sinh/hoc-sinh.component';
import { DanhMucTinTucComponent } from './components/admin/tin-tuc/danh-muc-tin-tuc/danh-muc-tin-tuc.component';
import { ThemMoiTinTucComponent } from './components/admin/tin-tuc/them-moi-tin-tuc/them-moi-tin-tuc.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: 'giao-vien', component: GiaoVienComponent },
      { path: 'hoc-sinh', component: HocSinhComponent },
      { path: 'menu-nguoi-dung', component: MenuNguoiDungComponent },
      { path: 'menu-quan-tri', component: MenuQuanTriComponent },
      { path: 'danh-muc-tin-tuc', component: DanhMucTinTucComponent },
      { path: 'them-moi-tin-tuc', component: ThemMoiTinTucComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
