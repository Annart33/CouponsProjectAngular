import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Routes, RouterModule } from "@angular/router";
import { VacationComponent } from './components/vacation/vacation.component';
import { FoodComponent } from './components/food/food.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { AboutComponent } from './components/about/about.component';
import { Page404Component } from './components/page404/page404.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from "@angular/forms";
import { RegisterCompanyComponent } from './components/register-company/register-company.component';
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component';
import { HttpClientModule } from "@angular/common/http";
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
// import { OneCouponComponent } from './components/one-coupon/one-coupon.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
import { CookieService } from 'ngx-cookie-service';
import { EditCouponsComponent } from './components/edit-coupons/edit-coupons.component';
import { CouponUpdateComponent } from './components/coupon-update/coupon-update.component';
import { ContatcUsComponent } from './components/contatc-us/contatc-us.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "vacation", component: VacationComponent},
  {path: "about", component: AboutComponent},
  {path: "electronics", component: ElectronicsComponent},
  {path: "food", component: FoodComponent},
  {path: "register", component: RegisterComponent},
  {path: "registerCustomer", component: RegisterCustomerComponent},
  {path: "registerCompany", component: RegisterCompanyComponent},
  {path: "signIn", component: SignInComponent},
  {path: "logOut", component: LogOutComponent},
  {path: "edit", component: EditProfileComponent},
  // {path: "one-coupon", component: OneCouponComponent},
  {path: "addCoupon", component: AddCouponComponent},
  {path: "editCoupon", component: EditCouponsComponent},
  {path: "update", component: CouponUpdateComponent},
  {path: "contactUs", component: ContatcUsComponent},
  {path:"**", component: Page404Component}

];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    VacationComponent,
    FoodComponent,
    ElectronicsComponent,
    AboutComponent,
    Page404Component,
    SignInComponent,
    RegisterComponent,
    RegisterCompanyComponent,
    RegisterCustomerComponent,
    SideBarComponent,
    LogOutComponent,
    EditProfileComponent,
    // OneCouponComponent,
    AddCouponComponent,
    EditCouponsComponent,
    CouponUpdateComponent,
    ContatcUsComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    ],
    
  providers: [CookieService],
  bootstrap: [LayoutComponent]

})
export class AppModule { }
