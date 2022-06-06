import { NgModule } from '@angular/core';
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
import { GiaoVienComponent } from './components/admin/tai-khoan/giao-vien/giao-vien.component';
import { HocSinhComponent } from './components/admin/tai-khoan/hoc-sinh/hoc-sinh.component';
import { MenuNguoiDungComponent } from './components/admin/menu/menu-nguoi-dung/menu-nguoi-dung.component';
import { MenuQuanTriComponent } from './components/admin/menu/menu-quan-tri/menu-quan-tri.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { TabViewModule } from 'primeng/tabview';
@NgModule({
  declarations: [AppComponent, DefaultLayoutComponent, FooterComponent, NavbarComponent, SidebarComponent, GiaoVienComponent, HocSinhComponent, MenuNguoiDungComponent, MenuQuanTriComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    ToolbarModule,
    AvatarModule,
    MenubarModule,
    SplitButtonModule,
    NgxSpinnerModule,
    TabViewModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
