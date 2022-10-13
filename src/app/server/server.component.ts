import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created.';
  showUsername = 'No Username entered.'
  serverName = '';
  username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() { 
  }

  onCreateServer() {
    this.serverCreationStatus = this.serverName + ' was created!';
  }

  onFormSave() {
    this.showUsername = this.username + ' is available!';
  }

  onReset() {
    this.showUsername = 'Username reseted!';
    this.username = '';
  }
  
  //Function to save a form with the Enter key
  enterKeySave(event) {
    if (event.keyCode === 13){
      this.onCreateServer();
    }
  }
}
