import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/login/common/footer/footer.component';
import { HeaderComponent } from './component/login/common/header/header.component';
import { NavComponent } from './component/login/common/nav/nav.component';
import { DetailComponent } from './component/detail/detail.component';
import { RegisterComponent } from './component/register/register.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CartComponent } from './component/shopping-cart/cart/cart.component';
import { ProductListComponent } from './component/shopping-cart/product-list/product-list.component';
import { FiltersComponent } from './component/shopping-cart/filters/filters.component';
import { ProductItemComponent } from './component/shopping-cart/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    DetailComponent,
    RegisterComponent,
    ShoppingCartComponent,
    CartComponent,
    ProductListComponent,
    FiltersComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
