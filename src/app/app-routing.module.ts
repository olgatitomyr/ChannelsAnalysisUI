import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelsListComponent } from './components/channels/channels-list/channels-list.component';
import { InfoComponent } from './components/info/info.component';
import { ViewChannelComponent } from './components/view-channel/view-channel.component';

const routes: Routes = [
  {
    path: '',
    component: ChannelsListComponent
  },
  {
    path: 'channels',
    component: ChannelsListComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'channels/:id',
    component: ViewChannelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
