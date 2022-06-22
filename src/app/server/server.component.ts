import {Component, Input, OnInit} from '@angular/core';
import {ServerModel} from "./server.model";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input('importFromServers') server?: ServerModel;
  serverState: boolean = true;


  toggleServer() {
    this.serverState = !this.serverState;
  }

  ngOnInit(): void {
  }
}
