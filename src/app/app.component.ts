import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { Observable } from "rxjs";

import { AppState } from "./store/state";
import { toggleSidenav } from "./store/action";
import { selectSidenav } from "./store/selector";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("navigaionAnimation", [
      state(
        "closed",
        style({
          backgroundColor: "yellow"
        })
      ),
      state(
        "open",
        style({
          backgroundColor: "red"
        })
      ),
      transition("closed <=> open", animate(400))
    ])
  ]
})
export class AppComponent implements OnInit {
  animationState = "closed";
  sidenavState$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.sidenavState$ = store.pipe(select(selectSidenav));
  }

  ngOnInit() {}

  toggleSidenav() {
    this.store.dispatch(toggleSidenav());
  }

  animateSidenav() {
    this.animationState === "open"
      ? (this.animationState = "closed")
      : (this.animationState = "open");
  }
}
