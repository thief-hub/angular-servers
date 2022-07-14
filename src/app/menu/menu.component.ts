import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { ServerModel } from '../server/server.model';
import { ServerlistService } from "../shared/serverlist.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  @ViewChild('inputValue') inputValueSetter!: ElementRef;
  buttonDissabled: boolean = true;
  showError: boolean = false;
  errorMsg: string = 'Fehlermeldung';
  showCreation: boolean = false;
  createdName: string = '';

  ngOnInit(): void {
  }

  constructor(private serverlistService: ServerlistService) {
  }

  onInput(inputValue: string) {
    if (inputValue === '') {
      this.buttonDissabled = true;
      this.showError = false;
    } else if (this.serverlistService.getServerNames().includes(inputValue)) {
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
    if(this.buttonDissabled){return;}//bandaid
    this.createdName = name;
    this.buttonDissabled = true;
    this.serverlistService.createServer(name);
    this.showCreation = true;
    this.inputValueSetter.nativeElement.value = '';
  }
}
