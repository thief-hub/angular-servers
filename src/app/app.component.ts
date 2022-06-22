import { Component } from '@angular/core';
import {ServerModel} from "./server/server.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Servers';
  servers!: ServerModel[];

  constructor() {
  }

  parentToServers(menuServers: ServerModel[]) {
    this.servers =  menuServers;
  }
}
