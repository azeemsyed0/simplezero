import { NgModule } from '@angular/core';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/shared/material.module';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from 'src/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,    
    FooterComponent
  ],
  imports: [
    appRouting,
    SharedModule,    
    MaterialModule,
    BrowserModule,    
    HttpClientModule,
    BrowserAnimationsModule
  ],  
  providers: [
    SharedModule,
    AuthService,
    AuthGuard,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
