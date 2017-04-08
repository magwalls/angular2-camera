import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { LoginComponent } from './login/login.component';
import { CameraService } from './camera/camera.service';
import { HelpComponent } from './help/help.component';
import { MenuComponent } from './menu/menu.component'
import { AppService } from './shared/services/app.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'camera', component: CameraComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    LoginComponent,
    HelpComponent,
    MenuComponent
  ],
   entryComponents: [HelpComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AppService, CameraService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
