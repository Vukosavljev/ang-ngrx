import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { Observable } from "rxjs";

import { AppState } from "./store/state";
import { toggleSidenav } from "./store/action";
import { selectSidenav } from "./store/selector";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  sidenavState$: Observable<boolean>;
  side = true;

  constructor(private store: Store<AppState>) {
    this.sidenavState$ = store.pipe(select(selectSidenav));
  }

  ngOnInit() {}

  toggleSidenav() {
    this.store.dispatch(toggleSidenav());
  }
}
