import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import * as React from "react";
import * as ReactDom from "react-dom";

import { createRoot } from "react-dom/client";

const containerElementName = "customReactComponentContainer";

interface IUser {
  name: string;
  email: string;
}

@Component({
  selector: "app-profile-user",
  template: ` <h2 style="color: cadetblue">Profile (React Microfrontend)</h2>
    <div
      style="font-family: Inter, sans-serif; color: rgb(140, 137, 137, 1); font-size: 13px"
    >
      This user profile component is being remotely loaded into the application
      from React App using Webpack Module Federation
    </div>
    <span #${containerElementName}></span>`,
  encapsulation: ViewEncapsulation.None,
})
export class ProfileUserComponent {
  @Input() user: IUser = { name: "", email: "" };

  @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;
  root!: any;

  constructor() {
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked(user: IUser) {
    this.updateCurrentUser(user.name, user.email);
  }

  updateCurrentUser(name: string, email: string): void {}

  ngAfterViewInit() {
    this.root = createRoot(this.containerRef.nativeElement);
    this.root.render("Loading script...");
    try {
      import("profile_user/ProfileReactComponent").then((val) => {
        this.root.render(
          React.createElement(val.ProfileReactComponent, {
            user: this.user,
            onClick: this.handleClicked,
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
