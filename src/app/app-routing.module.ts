import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Pages/admin/admin.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { TestComponent } from './Pages/test/test.component';

const routes: Routes = [
  { path: 'main', component:  MainPageComponent},
  { path: 'test', component: TestComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
