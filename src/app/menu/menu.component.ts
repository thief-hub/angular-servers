import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServerModel } from '../server/server.model';
import { ServerlistService } from "../shared/serverlist.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  nameIndex: string[] = [];
  buttonDissabled: boolean = true;
  showError: boolean = false;
  errorMsg: string = 'Fehlermeldung';
  showCreation: boolean = false;
  setInputValue: string = '';
  createdName: string = '';

  ngOnInit(): void {
    /*this.emitToParent.emit(this.servers);*/
  }

  constructor(private serverlistService: ServerlistService) {
  }

  onInput(inputValue: string) {
    for (let i = 0; i < this.serverlistService.getServers().length; i++) {
      this.nameIndex[i] = this.serverlistService.getServers()[i].name;
    }

    if (inputValue === '') {
      this.buttonDissabled = true;
      this.showError = false;
    } else if (this.nameIndex.includes(inputValue)) {
      this.buttonDissabled = true;
      this.showCreation = false;
      this.showError = true;
    } else {
      this.buttonDissabled = false;
      this.showError = false;
      this.showCreation = false;
    }
  }

  onCreateServer(name: string) {
    this.createdName = this.setInputValue;
    this.buttonDissabled = true;
    this.serverlistService.createServer(name);
    this.showCreation = true;
    this.setInputValue = '';
  }
}
