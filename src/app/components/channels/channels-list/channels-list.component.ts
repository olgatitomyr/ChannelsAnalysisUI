import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/app/models/channel.model';
import { ChannelsService } from 'src/app/services/channels.service';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.css']
})
export class ChannelsListComponent implements OnInit {
  channels: Channel[] = [];
  
  constructor(private channelsService: ChannelsService) {
   }

  ngOnInit(): void {
    this.channels = this.channelsService.getChannels();
  }

}
