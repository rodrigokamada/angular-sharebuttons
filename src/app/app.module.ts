import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareButtonsModule,
    ShareIconsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
