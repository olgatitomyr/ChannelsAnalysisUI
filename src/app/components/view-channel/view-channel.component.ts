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
    name: '',
    subscribersNumber: 0,
    prorussianCoef: 0
  };

  

  constructor(private channelsService: ChannelsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.channel = this.channelsService.getChannel(params['id'])
    });
  }
}
