import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { ProfileUserService } from "./profile-user/profile-user.service";
import { IUser } from "./models/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  durationInSeconds = 5;
  currentUser$: Observable<IUser> = new Observable();

  constructor(private profileUserService: ProfileUserService) {}

  ngOnInit(): void {
    this.currentUser$ = this.profileUserService.currentUser$;
  }

  changeCurrentUser($event: any) {
    console.log("$event", $event);
  }
}
