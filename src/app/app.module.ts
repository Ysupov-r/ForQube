import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './modules/ng-material/ng-material.module';
import { AdminComponent } from './Pages/admin/admin.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { AnimVideoComponent } from './modules/components/anim-video/anim-video.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MainPageComponent,
    AnimVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
