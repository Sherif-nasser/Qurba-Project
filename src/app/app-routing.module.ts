import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContainerComponent } from './Layouts/layout-container/layout-container.component';
import { LayoutModule } from './Layouts/layout-container/layout.module';


const routes: Routes = [
  { 
  path: '',
  loadChildren: () => import('./Layouts/layout-container/layout.module').then(m => m.LayoutModule) // Layout module lazy loaded
  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
