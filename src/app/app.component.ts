import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "nw-angular";
  isDev = window.nw.process.versions["nw-flavor"] === "sdk";

  versions =
    "" +
    "You are running NW.js (v" +
    window.nw.process.versions.nw +
    " " +
    window.nw.process.versions["nw-flavor"] +
    "), " +
    "Node.js (v" +
    window.nw.process.versions.node +
    "), " +
    "Chromium (v" +
    window.nw.process.versions.chromium +
    "), " +
    "and Angular (v9.0.6).";

  public links: any;

  constructor(private httpClient: HttpClient) {
    this.links = [
      {
        title: "Angular Tutorial",
        url: "https://angular.io/tutorial",
      },
      {
        title: "Angular CLI Documentation",
        url: "https://angular.io/cli",
      },
      {
        title: "NW.js Documentation",
        url: "https://nwjs.io",
      },
    ];
  }
  ngOnInit() {
    setTimeout(() => {
      this.httpClient.get("http://localhost:4567/").subscribe((data) => {
        console.log(data);
        this.versions = data as any;
      });
    }, 5000);
  }

  public open(evt, link) {
    evt.preventDefault();
    window.nw.Shell.openExternal(link.url);
  }

  public openDevTools(evt) {
    evt.preventDefault();
    window.nw.Window.get().showDevTools();
  }
}
