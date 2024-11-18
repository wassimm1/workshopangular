import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { HighlighterDirective } from './highlighter.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { ProfileModule } from './profile/profile.module';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { ProductModule } from './product/product.module';
import { CardComponent } from './card/card.component';
import { ListProductComponent } from './list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    HighlighterDirective,
    FilterPipe,
    NotfoundComponent,
    ProductCategoryComponent,
    ProductsCategoryQPComponent,
    DetailsCategoryComponent,
    AddCategorieComponent,
    CardComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProfileModule,
    ProductModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
