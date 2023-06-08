import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RouteGuardServiceService } from 'src/services/route-guard-service.service';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'welcome/:userId', component: WelcomeComponent, canActivate:[RouteGuardServiceService]},
  {path:'articles', component: ArticlesComponent, canActivate:[RouteGuardServiceService]},
  {path:'logout', component: LogoutComponent, canActivate:[RouteGuardServiceService]},


  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
