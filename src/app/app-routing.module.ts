import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/public/login/login.component';
import { ModulesComponent } from './pages/private/modules/modules.component';
import { TeachingMaterialLiteComponent } from './pages/private/teaching-material-lite/teaching-material-lite.component';
import { TeachingMaterialListComponent } from './pages/private/teaching-material-list/teaching-material-list.component';
import { AuthGuard } from './services/auth.guard';
import { LoggedinGuard } from './services/loggedin-guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoggedinGuard]  },
  { path: 'modules', component: ModulesComponent, canActivate: [AuthGuard]  },
  { path: 'teaching-lite', component: TeachingMaterialLiteComponent, canActivate: [AuthGuard]  },
  { path: 'teaching-list', component: TeachingMaterialListComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
