import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './products-list/products-list.component';
import { ProductAlertsComponent } from './products-alerts/products-alerts.component';
import { ProductDetailsComponent } from './products-details/products-details.component';
import { ProductsCatalogComponent } from './products-catalog/products-catalog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'productsList/:productId', component: ProductListComponent },
      { path: 'productsModel/:productId', component: ProductDetailsComponent },
      { path: 'catalog', component: ProductsCatalogComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductsCatalogComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
