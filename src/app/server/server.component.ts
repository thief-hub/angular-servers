import { Component, Input, OnInit } from '@angular/core';
import { ServerModel } from './server.model';
import { ServerlistService } from '../shared/serverlist.service';

// TODO: make stateless
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  @Input('serverFromServers') server!: ServerModel;
  serverState: boolean = true;
  startButtonValue: string = 'Stop Server';

  constructor(private serverListService: ServerlistService) {}

  toggleServer() {
    this.serverState = !this.serverState;
    if (!this.serverState) this.startButtonValue = 'Start Server';
    else this.startButtonValue = 'Stop Server';
  }

  removeServer() {
    this.serverListService.removeServer(this.server.id);
  }

  ngOnInit(): void {}
}
