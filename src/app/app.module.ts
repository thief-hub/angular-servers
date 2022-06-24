import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { MenuComponent } from './menu/menu.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import {ServerlistService} from "./shared/serverlist.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ServersComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServerlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
