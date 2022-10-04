import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from 'src/app/Pages/products/products.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LayoutContainerComponent } from './layout-container.component';

const routes: Routes = [
 {
  path: '',
  component: LayoutContainerComponent,
  
  children: [
    { path: 'products', component: ProductsComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
