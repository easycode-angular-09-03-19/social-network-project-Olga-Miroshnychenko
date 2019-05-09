import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileCoverComponent } from './components/profile-cover/profile-cover.component';
import { ProfileControlsComponent } from './components/profile-controls/profile-controls.component';
import { ProfileSelfiesComponent } from './components/profile-selfies/profile-selfies.component';
import { ProfileTabsContainerComponent } from './components/profile-tabs-container/profile-tabs-container.component';
import { PicturePreviewComponent } from './components/picture-preview/picture-preview.component';
import { ProfileFavouritesComponent } from "./components/profile-favourites/profile-favourites.component";
import { ProfileFollowersComponent } from './components/profile-followers/profile-followers.component';
import { ProfileFollowingsComponent } from './components/profile-followings/profile-followings.component';
import { ProfileFollowingsItemComponent } from "./components/profile-followings-item/profile-followings-item.component";



@NgModule({
  declarations: [ProfileComponent, SettingsComponent, ProfileCoverComponent, ProfileControlsComponent, ProfileSelfiesComponent, ProfileTabsContainerComponent, PicturePreviewComponent, ProfileFavouritesComponent, ProfileFollowersComponent, ProfileFollowingsComponent, ProfileFollowingsItemComponent, ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
