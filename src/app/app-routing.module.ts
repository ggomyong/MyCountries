import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  {
    path: 'introduction', component: IntroductionComponent
  },
  {
    path: 'shop', component: ShopComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
