import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductsComponent } from 'src/app/Pages/products/products.component';
import { AuthLoginsComponent } from 'src/app/Pages/auth-logins/auth-logins.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutContainerComponent } from './layout-container.component';


@NgModule({
  
  declarations: [
    LayoutContainerComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    AuthLoginsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
