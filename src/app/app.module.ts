import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { MenuNguoiDungComponent } from './components/admin/menu/menu-nguoi-dung/menu-nguoi-dung.component';
import { MenuQuanTriComponent } from './components/admin/menu/menu-quan-tri/menu-quan-tri.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DanhMucTinTucComponent } from './components/admin/tin-tuc/danh-muc-tin-tuc/danh-muc-tin-tuc.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { PaginatorModule } from 'primeng/paginator';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MessagesModule } from 'primeng/messages';
import { ThemMoiTinTucComponent } from './components/admin/tin-tuc/them-moi-tin-tuc/them-moi-tin-tuc.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { QuanLiTinTucComponent } from './components/admin/tin-tuc/quan-li-tin-tuc/quan-li-tin-tuc.component';
import { ThemMoiComponent } from './components/admin/tin-tuc/quan-li-tin-tuc/them-moi/them-moi.component';
import { TreeSelectModule } from 'primeng/treeselect';
import { ThuVienComponent } from './common/thu-vien/thu-vien.component';
import { TreeModule } from 'primeng/tree';
import { ContextMenuModule } from 'primeng/contextmenu';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { RatingModule } from 'primeng/rating';
import { TuyenDungComponent } from './components/admin/tuyen-dung/tuyen-dung/tuyen-dung.component';
import { ThemMoiTuyenDungComponent } from './components/admin/tuyen-dung/them-moi-tuyen-dung/them-moi-tuyen-dung.component';
import { UngVienComponent } from './components/admin/tuyen-dung/ung-vien/ung-vien.component';
import { TaiKhoanComponent } from './components/admin/tai-khoan/tai-khoan/tai-khoan.component';
import { FaqComponent } from './components/admin/faq/faq/faq.component';
import { SliderComponent } from './components/admin/silder/slider/slider.component';
import { GiaoVienComponent } from './components/admin/giao-vien/giao-vien/giao-vien.component';
import { LopHocComponent } from './components/admin/lop-hoc/lop-hoc/lop-hoc.component';
import { MonHocComponent } from './components/admin/mon-hoc/mon-hoc/mon-hoc.component';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { BaiKiemTraComponent } from './components/admin/bai-kiem-tra/bai-kiem-tra/bai-kiem-tra.component';
import { ThemMoiTaiKhoanComponent } from './components/admin/tai-khoan/them-moi-tai-khoan/them-moi-tai-khoan.component';
import { ChiTietTinTucComponent } from './components/admin/tin-tuc/chi-tiet-tin-tuc/chi-tiet-tin-tuc.component';
import { ChiTietTuyenDungComponent } from './components/admin/tuyen-dung/chi-tiet-tuyen-dung/chi-tiet-tuyen-dung.component';
import { ThemMoiFaqComponent } from './components/admin/faq/faq/them-moi-faq/them-moi-faq.component';
import { ChiTietFaqComponent } from './components/admin/faq/faq/chi-tiet-faq/chi-tiet-faq.component';
@NgModule({
  declarations: [AppComponent, DefaultLayoutComponent, FooterComponent, NavbarComponent, SidebarComponent, MenuNguoiDungComponent, MenuQuanTriComponent, DanhMucTinTucComponent, ThemMoiTinTucComponent, QuanLiTinTucComponent, ThemMoiComponent, ThuVienComponent, TuyenDungComponent, ThemMoiTuyenDungComponent, UngVienComponent, TaiKhoanComponent, FaqComponent, SliderComponent, GiaoVienComponent, LopHocComponent, MonHocComponent, BaiKiemTraComponent, ThemMoiTaiKhoanComponent, ChiTietTinTucComponent, ChiTietTuyenDungComponent, ThemMoiFaqComponent, ChiTietFaqComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    ToolbarModule,
    AvatarModule,
    MenubarModule,
    SplitButtonModule,
    NgxSpinnerModule,
    TabViewModule,
    DropdownModule,
    ToggleButtonModule,
    DialogModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    PaginatorModule,
    MessagesModule,
    BreadcrumbModule,
    InputSwitchModule,
    TreeSelectModule,
    TreeModule,
    ChipsModule,
    RatingModule,
    ContextMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    CalendarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ApiService,
    ConfirmationService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
