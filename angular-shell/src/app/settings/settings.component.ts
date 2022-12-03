import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

const containerVueElementName = "customVueComponentContainer";

@Component({
  standalone: true,
  selector: "app-settings",
  template: `<div style="margin: 35px">
    <h2 style="color: cadetblue">Profile (React Microfrontend)</h2>
    <div
      style="font-family: Inter, sans-serif; color: rgb(140, 137, 137, 1); font-size: 13px"
    >
      This user profile component is being remotely loaded into the application
      from React App using Webpack Module Federation
    </div>
    <span #${containerVueElementName}></span>
  </div>`,
  encapsulation: ViewEncapsulation.None,
})
export class SettingsComponent {
  @ViewChild(containerVueElementName, { static: true })
  containerVueRef!: ElementRef;

  root!: any;

  name = "name from Angular";

  ngAfterViewInit() {
    try {
      import("settings_user/Settings2").then((val) => {
        console.log("Vue_val", val);
        document.body.appendChild(
          new val.default({
            props: { msg: "dfjdjnf" },
          })
        );
      });
    } catch {}
  }
}
