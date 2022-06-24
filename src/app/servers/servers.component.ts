import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ServerModel} from "../server/server.model";
import {ServerlistService} from "../shared/serverlist.service";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: ServerModel[] = [];

  constructor(private serverlistService: ServerlistService) {
  }

  ngOnInit(): void {
    this.servers = this.serverlistService.getServers();
  }
}
