import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldNgIfComponent } from './directives/hello-world-ngif/hello-world-ngif.component';
import { HelloWorldBindingsComponent } from './hello-world/hello-world-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldBindingsComponent,
    HelloWorldNgIfComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
