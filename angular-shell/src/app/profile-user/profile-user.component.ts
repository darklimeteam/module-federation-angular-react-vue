import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import * as React from "react";
import * as ReactDom from "react-dom";

import { createRoot } from "react-dom/client";
import { IUser } from "../models/user";
import { ProfileUserService } from "./profile-user.service";

const containerElementName = "customReactComponentContainer";

@Component({
  standalone: true,
  selector: "app-profile-user",
  template: `<div style="margin: 35px">
    <h2 style="color: cadetblue">Profile (React Microfrontend)</h2>
    <div
      style="font-family: Inter, sans-serif; color: rgb(140, 137, 137, 1); font-size: 13px"
    >
      This user profile component is being remotely loaded into the application
      from React App using Webpack Module Federation
    </div>
    <span #${containerElementName}></span>
  </div>`,
  encapsulation: ViewEncapsulation.None,
})
export class ProfileUserComponent {
  @Input() user: IUser = { name: "John", email: "john.dou@gmail.com" };

  @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;
  root!: any;

  constructor(private profileUserService: ProfileUserService) {
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  updateCurrentUser(user: IUser) {
    this.profileUserService.setNewCurrentUser(user);
  }

  ngAfterViewInit() {
    this.root = createRoot(this.containerRef.nativeElement);
    this.root.render("Loading script...");
    try {
      import("profile_user/ProfileReactComponent").then((val) => {
        this.root.render(
          React.createElement(val.ProfileReactComponent, {
            ...this.user,
            onClick: this.updateCurrentUser,
          })
        );
      });
    } catch (error) {
      console.log("Erorr", error);
    }
  }

  ngOnDestroy() {
    this.root.unmountComponentAtNode(this.containerRef.nativeElement);
  }
}
