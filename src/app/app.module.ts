import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/public/login/login.component';
import { ModulesComponent } from './pages/private/modules/modules.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { ModuleAccessComponent } from './components/module-access/module-access.component';
import { TeachingMaterialLiteComponent } from './pages/private/teaching-material-lite/teaching-material-lite.component';
import { TeachingMaterialListComponent } from './pages/private/teaching-material-list/teaching-material-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth-service';
import { BasicAuthInterceptor } from './services/basic-auth.interceptor';
import { ErrorInterceptor } from './services/error.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { HorizontalScrollDirective } from './directives/horizontal-scroll.directive';
import { TeachingMaterialSingleComponent } from './components/teaching-material-single/teaching-material-single.component';
// import { BasicAuthInterceptor } from './services/basic-auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModulesComponent,
    ButtonComponent,
    ModuleAccessComponent,
    TeachingMaterialLiteComponent,
    TeachingMaterialListComponent,
    HorizontalScrollDirective,
    HeaderComponent,
    TeachingMaterialSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
