import {
  Component,
  ElementRef, OnDestroy,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import {SettingsService} from "./settings.service";
import {getState} from "store/getState";
import Store from "store/Store";

const containerVueElementName = "customVueComponentContainer";

@Component({
  standalone: true,
  selector: "app-settings",
  template: `<div style="margin: 35px">
    <h2 style="color: cadetblue">Settings (Vue Microfrontend)</h2>
    <div
      style="font-family: Inter, sans-serif; color: rgb(140, 137, 137, 1); font-size: 13px; margin-bottom: 15px"
    >
      This settings component is being remotely loaded into the application from
      Vue App using Webpack Module Federation
    </div>
    <span #${containerVueElementName}></span>
  </div>`,
  encapsulation: ViewEncapsulation.None,
})
export class SettingsComponent implements OnDestroy{
  @ViewChild(containerVueElementName, { static: true })
  containerVueRef!: ElementRef;

  root!: any;

  name = "name from Angular";

  constructor(private renderer: Renderer2, private settingsService: SettingsService) {}

  ngAfterViewInit() {
    try {
      import("settings_user/Settings").then((val) => {
        this.renderer.appendChild(
          this.containerVueRef.nativeElement,
          new val.default()
        );
      });

      import("store/Store").then((val2) => {
        this.settingsService.setNewSettings(val2.default.getState().currentSettingsValue);
      });

      Store.subscribe(() => {
        this.settingsService.setNewSettings(getState().currentSettingsValue);
      })
    } catch {}
  }

  ngOnDestroy(): void {
    const unsubscribe = Store.subscribe(getState)
    unsubscribe()
  }
}
