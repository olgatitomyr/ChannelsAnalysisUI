import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/app/models/channel.model';
import { ChannelsService } from 'src/app/services/channels.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-view-channel',
  templateUrl: './view-channel.component.html',
  styleUrls: ['./view-channel.component.css']
})
export class ViewChannelComponent implements OnInit {

  channel: Channel = {
    id: '',
    channelName: '',
    statistics: {
      channelId: '',
      lastPublicationDate: new Date(),
      viewsTotalCount:0,
      forwardsTotalCount:0,
      reactions: ''
    },
    prorussianCoefficient: {
      channelId: '',
      calculatedCoefficient: 0
    }
  };

  constructor(private channelsService: ChannelsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.channelsService.getChannel(params['id']).subscribe(
        c => {
          this.channel = c
          this.channel.statistics.reactions = this.unicodeToChar(this.channel.statistics.reactions);
        })
    });
  }
  
  private unicodeToChar(text: string) {
    return text.replace(/\\\\u[\dA-Fa-f]{8}/gi, 
      function (match) {
          return String.fromCodePoint(parseInt(match.replace(/\\\\u/gi, ''), 16));
      });
  }
}
