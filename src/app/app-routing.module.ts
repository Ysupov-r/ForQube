import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AdminComponent } from './Pages/admin/admin.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { TestComponent } from './Pages/test/test.component';

const routes: Routes = [
  { path: 'main', component:  MainPageComponent, canActivate: [AuthGuard]},
  { path: 'test', component: TestComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'test' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
