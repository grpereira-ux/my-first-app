import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreated = false;
  serverCreationStatus = '';
  serverName = '';
  servers = ['TestServer#1', 'TestServer#2'];

  ngOnInit(): void {
  }

  onCreateServer() {
    if (!this.serverName) {
      this.serverCreationStatus = 'Please, insert a valid server name.'
    }
    else {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = this.serverName + ' was created!';
      this.serverName = '';
    }
  }

  //Function to save a form with the Enter key
  enterKeySave(event) {
    if (event.keyCode === 13){
      this.onCreateServer();
    }
  }
}
