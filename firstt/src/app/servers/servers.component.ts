import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  servers = ['testServer', 'testServer 2'];
  serverName = 'testServer';
  serverStatus: String = 'NO';

  constructor() { }

  onCreateServer() {
    this.servers.push(this.serverName)
    this.serverStatus = 'WOW';
  }

  ngOnInit() { }
}
