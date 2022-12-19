import {AfterViewInit, Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {ProfileUserService} from "./profile-user/profile-user.service";
import {IUser} from "./models/user";
import {SettingsOptions} from "./enums/settings";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit {
  currentUser$: Observable<IUser> = new Observable();
  selectedNotificationMode: SettingsOptions = SettingsOptions.SHOW;

  constructor(private profileUserService: ProfileUserService) {}

  public get selectedNotificationModeText(): string {
    switch (this.selectedNotificationMode) {
      case SettingsOptions.SHOW:
        return 'Show notifications';
      case SettingsOptions.SEND_VIA_EMAIL:
        return 'Send notifications via email';
      case SettingsOptions.NOT_SHOW:
        return 'Turn off notifications';
    }
  }

  ngOnInit(): void {
    this.currentUser$ = this.profileUserService.currentUser$;
  }

  ngAfterViewInit() {
    // TODO: there is should be a subscription to the store value (or smth like that)
    try {
      import("store/Store").then((val) => {
        this.selectedNotificationMode = val.default.getState().currentSettingsValue;
      });
    } catch {}
  }
}
