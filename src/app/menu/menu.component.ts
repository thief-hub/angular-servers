import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServerModel} from "../server/server.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() emitToParent = new EventEmitter<ServerModel[]>();
  servers: ServerModel[] = [{name: 'Beispiel Server 1'}, {name: 'Beispiel Server 2'}, {name: 'Beispiel Server 3'}];
  nameIndex: string[] = [];
  buttonDissabled: boolean = true;
  showError: boolean = false;
  errorMsg: string = 'Fehlermeldung';
  showCreation: boolean = false;
  setInputValue: string = '';

  onInput(inputValue: string) {
    for (let i = 0; i < this.servers.length; i ++) {
      this.nameIndex[i] = this.servers[i].name;
    }

    if(inputValue === ''){
      this.buttonDissabled = true;
    }
    else if (this.nameIndex.includes(inputValue)) {
      this.buttonDissabled = true;
      this.errorMsg = "name already exists dumbass";
      this.showError = true;
    }
    else {
      this.buttonDissabled = false;
      this.showError = false;
      this.showCreation = false;
    }
  }

  onCreateServer(name: string) {
    const server: ServerModel = {name: name};
    this.servers.push(server);
    this.setInputValue = '';
    this.buttonDissabled = true;
    this.emitToParent.emit(this.servers);
    this.showCreation = true;
  }

  ngOnInit(): void {
    this.emitToParent.emit(this.servers);
  }
}
