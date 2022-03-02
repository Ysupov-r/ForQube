import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './modules/shared/auth.service';
import { TestComponent } from './Pages/test/test.component';
import { TestService } from './modules/shared/test.service';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './init/keycloak-init.factory';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MainPageComponent,
    AnimVideoComponent,
    LoginComponent,
    RegisterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    KeycloakAngularModule,
    NgMaterialModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },

    AuthService,
    TestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
