import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from '../app/utils/guards/auth.guard';
import { RoleGuard } from '../app/utils/guards/role.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin',
        loadChildren: () => import('../app/components/admin/admin.module').then(c => c.AdminModule),
        data: {
          roles: [
            'admin'
          ]
        },
        canActivate: [RoleGuard]
      },
      {
        path: 'user',
        loadChildren: () => import('../app/components/user/user.module').then(c => c.UserModule),
      }
    ]
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
