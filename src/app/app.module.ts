import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './modules/ng-material/ng-material.module';
import { AdminComponent } from './Pages/admin/admin.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { AnimVideoComponent } from './modules/components/anim-video/anim-video.component';
import { LoginComponent } from './modules/components/login/login.component';
import { RegisterComponent } from './modules/components/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './modules/shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MainPageComponent,
    AnimVideoComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
