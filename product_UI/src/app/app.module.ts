import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { NavComponent } from './nav/nav.component';
import { PutComponent } from './put/put.component';
import { ProductputComponent } from './productput/productput.component';
import { DeleteComponent } from './delete/delete.component';
import { SubDeleteComponent } from './sub-delete/sub-delete.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductGetComponent } from './product-get/product-get.component';


const routes:Routes = [
  {path:'', component: GetComponent},
  {path:'sub',component:SubCategoryComponent},
  {path:'subDelete',component:SubDeleteComponent},
  {path:'app',component:AppComponent},
  {path:'post', component: PostComponent},
  {path:'put', component: PutComponent},
  {path:'delete',component:DeleteComponent},
  {path:'productGet',component:ProductGetComponent},
  {path:'productDelete',component:ProductDeleteComponent},
  {path:'productput',component:ProductputComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    GetComponent,
    PostComponent,
    SubCategoryComponent,
    NavComponent,
    PutComponent,
    ProductputComponent,
    DeleteComponent,
    SubDeleteComponent,
    ProductDeleteComponent,
    ProductGetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
   RouterModule.forRoot(routes),
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
