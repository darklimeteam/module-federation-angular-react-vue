import {
  NgModule,
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { loadRemoteModule } from "./utils/federation-utils";
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "profile-user",
    loadComponent: () =>
      import("./profile-user/profile-user.component").then(
        (m) => m.ProfileUserComponent
      ),
  },
  {
    path: "settings",
    loadComponent: () =>
      import("./settings/settings.component").then((m) => m.SettingsComponent),
  },
];

export function initializeApp(): () => void {
  return () => {
    loadRemoteModule({
      remoteEntry: "http://localhost:3001/remoteEntry.js",
      remoteName: "profile_user",
      exposedModule: "./ProfileReactComponent",
    });
    loadRemoteModule({
      remoteEntry: "http://localhost:3002/remoteEntry.js",
      remoteName: "settings_user",
      exposedModule: "./Settings2",
    });
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
    },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, // Added for custom elements support
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
