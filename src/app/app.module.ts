import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelsListComponent } from './components/channels/channels-list/channels-list.component';
import { InfoComponent } from './components/info/info.component';
import { ViewChannelComponent } from './components/view-channel/view-channel.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelsListComponent,
    InfoComponent,
    ViewChannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
