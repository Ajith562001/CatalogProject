import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule,Routes } from '@angular/router';
import { shpipe } from './sh.pipe';
import { AddComponent } from './postcomponent/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
const routes:Routes = [
  {path:'',component: AddComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    // serverComponent,
    // ServersComponent,
    shpipe,
    AddComponent,
    NavComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
   RouterModule.forRoot(routes)
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
