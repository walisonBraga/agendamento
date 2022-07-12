import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './photos/photo/photo.Component';
import { PhotosModule } from './photos/photos.module';

@NgModule({
  declarations: [
      AppComponent

  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      PhotosModule
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
