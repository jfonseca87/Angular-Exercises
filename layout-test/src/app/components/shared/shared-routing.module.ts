import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('../login/login.module')
          .then(c => c.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () =>
          import('../registration/registration.module')
          .then(c => c.RegistrationModule)
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module')
          .then(c => c.DashboardModule)
      },
      {
        path: 'account-settings',
        loadChildren: () =>
          import('../account-settings/account-settings.module')
          .then(c => c.AccountSettingsModule)
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../users/users.module')
          .then(c => c.UsersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
