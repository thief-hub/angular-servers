import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ServerModel} from "../server/server.model";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  @Input('importFromRoot') servers!: ServerModel[];

  constructor() {

  }

  ngOnInit(): void {
  }
}
