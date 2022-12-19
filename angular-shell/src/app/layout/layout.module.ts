import { NgModule } from "@angular/core";

import { ProfileUserComponent } from "src/app/profile-user/profile-user.component";
import { ProfileUserService } from "../profile-user/profile-user.service";
import { SettingsComponent } from "../settings/settings.component";

@NgModule({
  imports: [ProfileUserComponent, SettingsComponent],
  providers: [ProfileUserService],
})
export class LayoutModule {}
