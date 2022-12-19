import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2} from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { ProfileUserService } from "./profile-user/profile-user.service";
import { IUser } from "./models/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit {
  currentUser$: Observable<IUser> = new Observable();

  constructor(private profileUserService: ProfileUserService) {}

  ngOnInit(): void {
    this.currentUser$ = this.profileUserService.currentUser$;
  }

  ngAfterViewInit() {
    try {
      import("store/Store").then((val) => {console.log(val.default)});

      // import("settings_user/Settings").then((val) => {
      //   console.log(val.default)
        // this.renderer.appendChild(
        //   this.containerVueRef.nativeElement,
        //   new val.default()
        // );
      // });
    } catch {}
  }
}
