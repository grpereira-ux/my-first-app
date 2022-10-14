import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'OFFLINE';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'ONLINE' : 'OFFLINE'
  }

  ngOnInit(): void {
  }
}
