import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThuVienComponent } from './common/thu-vien/thu-vien.component';
import { MenuNguoiDungComponent } from './components/admin/menu/menu-nguoi-dung/menu-nguoi-dung.component';
import { MenuQuanTriComponent } from './components/admin/menu/menu-quan-tri/menu-quan-tri.component';
import { GiaoVienComponent } from './components/admin/tai-khoan/giao-vien/giao-vien.component';
import { HocSinhComponent } from './components/admin/tai-khoan/hoc-sinh/hoc-sinh.component';
import { DanhMucTinTucComponent } from './components/admin/tin-tuc/danh-muc-tin-tuc/danh-muc-tin-tuc.component';
import { QuanLiTinTucComponent } from './components/admin/tin-tuc/quan-li-tin-tuc/quan-li-tin-tuc.component';
import { ThemMoiComponent } from './components/admin/tin-tuc/quan-li-tin-tuc/them-moi/them-moi.component';
import { ThemMoiTinTucComponent } from './components/admin/tin-tuc/them-moi-tin-tuc/them-moi-tin-tuc.component';
import { ThemMoiTuyenDungComponent } from './components/admin/tuyen-dung/them-moi-tuyen-dung/them-moi-tuyen-dung.component';
import { TuyenDungComponent } from './components/admin/tuyen-dung/tuyen-dung/tuyen-dung.component';
import { UngVienComponent } from './components/admin/tuyen-dung/ung-vien/ung-vien.component';
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
      { path: 'them-moi-tin-tuc', component: ThemMoiTinTucComponent },
      { path: 'quan-li-tin-tuc', component: QuanLiTinTucComponent },
      { path: 'quan-li-tin-tuc/them-moi', component: ThemMoiComponent },
      { path: 'quan-li-thu-vien', component: ThuVienComponent },
      { path: 'quan-li-tuyen-dung', component: TuyenDungComponent },
      { path: 'quan-li-tuyen-dung/them-moi', component: ThemMoiTuyenDungComponent},
      { path: 'ung-vien', component: UngVienComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
