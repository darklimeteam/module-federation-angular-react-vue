import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProfileUserComponent } from "./profile-user.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ProfileUserComponent,
  },
];

const EXPORTS = [ProfileUserComponent];
@NgModule({
  declarations: [...EXPORTS],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileUserModule {
  static exports = EXPORTS; // prevents from components being tree-shaked in production
}
