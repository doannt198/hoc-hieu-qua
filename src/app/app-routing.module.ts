import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThuVienComponent } from './common/thu-vien/thu-vien.component';
import { BaiKiemTraComponent } from './components/admin/bai-kiem-tra/bai-kiem-tra/bai-kiem-tra.component';
import { ChiTietFaqComponent } from './components/admin/faq/faq/chi-tiet-faq/chi-tiet-faq.component';
import { FaqComponent } from './components/admin/faq/faq/faq.component';
import { ThemMoiFaqComponent } from './components/admin/faq/faq/them-moi-faq/them-moi-faq.component';
import { GiaoVienComponent } from './components/admin/giao-vien/giao-vien/giao-vien.component';
import { ThemGiaoVienComponent } from './components/admin/giao-vien/them-giao-vien/them-giao-vien.component';
import { LopHocComponent } from './components/admin/lop-hoc/lop-hoc/lop-hoc.component';
import { MenuNguoiDungComponent } from './components/admin/menu/menu-nguoi-dung/menu-nguoi-dung.component';
import { MenuQuanTriComponent } from './components/admin/menu/menu-quan-tri/menu-quan-tri.component';
import { MonHocComponent } from './components/admin/mon-hoc/mon-hoc/mon-hoc.component';
import { SliderComponent } from './components/admin/silder/slider/slider.component';
import { TaiKhoanComponent } from './components/admin/tai-khoan/tai-khoan/tai-khoan.component';
import { ThemMoiTaiKhoanComponent } from './components/admin/tai-khoan/them-moi-tai-khoan/them-moi-tai-khoan.component';
import { ChiTietTinTucComponent } from './components/admin/tin-tuc/chi-tiet-tin-tuc/chi-tiet-tin-tuc.component';
import { DanhMucTinTucComponent } from './components/admin/tin-tuc/danh-muc-tin-tuc/danh-muc-tin-tuc.component';
import { QuanLiTinTucComponent } from './components/admin/tin-tuc/quan-li-tin-tuc/quan-li-tin-tuc.component';
import { ThemMoiComponent } from './components/admin/tin-tuc/quan-li-tin-tuc/them-moi/them-moi.component';
import { ThemMoiTinTucComponent } from './components/admin/tin-tuc/them-moi-tin-tuc/them-moi-tin-tuc.component';
import { ChiTietTuyenDungComponent } from './components/admin/tuyen-dung/chi-tiet-tuyen-dung/chi-tiet-tuyen-dung.component';
import { ThemMoiTuyenDungComponent } from './components/admin/tuyen-dung/them-moi-tuyen-dung/them-moi-tuyen-dung.component';
import { TuyenDungComponent } from './components/admin/tuyen-dung/tuyen-dung/tuyen-dung.component';
import { UngVienComponent } from './components/admin/tuyen-dung/ung-vien/ung-vien.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tai-khoan',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: 'tai-khoan', component: TaiKhoanComponent }, 
      { path: 'menu-nguoi-dung', component: MenuNguoiDungComponent },
      { path: 'menu-quan-tri', component: MenuQuanTriComponent },
      { path: 'danh-muc-tin-tuc', component: DanhMucTinTucComponent },
      { path: 'danh-muc-tin-tuc/:id', component: ChiTietTinTucComponent },
      { path: 'them-moi-tin-tuc', component: ThemMoiTinTucComponent },
      { path: 'quan-li-tin-tuc', component: QuanLiTinTucComponent },
      { path: 'quan-li-tin-tuc/them-moi', component: ThemMoiComponent },
      { path: 'quan-li-thu-vien', component: ThuVienComponent },
      { path: 'quan-li-tuyen-dung', component: TuyenDungComponent },
      { path: 'quan-li-tuyen-dung/them-moi', component: ThemMoiTuyenDungComponent},
      { path: 'ung-vien', component: UngVienComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'slider', component: SliderComponent },
      { path: 'giao-vien', component: GiaoVienComponent },
      { path: 'giao-vien/them-moi', component: ThemGiaoVienComponent},
      { path: 'lop-hoc', component: LopHocComponent },
      { path: 'mon-hoc', component: MonHocComponent },
      { path: 'bai-kiem-tra', component: BaiKiemTraComponent },
      { path: 'tai-khoan/them-moi-tai-khoan', component: ThemMoiTaiKhoanComponent }, 
      { path: 'tuyen-dung/:id', component: ChiTietTuyenDungComponent },
      { path: 'faq/them-moi', component: ThemMoiFaqComponent },
      { path: 'chi-tiet-faq/:id', component: ChiTietFaqComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
