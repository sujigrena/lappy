import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ConfigurationModuleComponent } from './configuration-module/configuration-module.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product', component: ProductComponent },
  { path: 'getProducts/:id/:listLevel', component: ProductComponent },
  { path: 'getSeries/:id/:listLevel', component: ProductComponent },
  { path: 'getModels/:id/:listLevel', component: ProductComponent },
  { path: 'getConfiguration/:id/:listLevel', component: ConfigurationModuleComponent }
  // {path: 'getConfigure/:id/:listLevel', component: Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
