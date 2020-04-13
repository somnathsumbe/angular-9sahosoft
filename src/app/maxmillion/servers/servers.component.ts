import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server Was Created !";
  serverName = "TestServer";
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = "Server is Created ." + " Name is "+ this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
    console.log(this.serverName);
  }
}
