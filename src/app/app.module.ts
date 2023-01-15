import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelsListComponent } from './components/channels/channels-list/channels-list.component';
import { InfoComponent } from './components/info/info.component';
import { ViewChannelComponent } from './components/view-channel/view-channel.component';
import { ChannelFilterPipe } from './pipes/channel-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChannelsListComponent,
    InfoComponent,
    ViewChannelComponent,
    ChannelFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
