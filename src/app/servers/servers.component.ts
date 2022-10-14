import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = '';
  serverName = '';
  servers = ['TestServer#1', 'TestServer#2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void { 
  }

  onCreateServer() {
    if (!this.serverName) {
      this.serverCreationStatus = 'Please, insert a server name.' 
    }
    else {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = this.serverName + ' was created!';
    }
  }
}
