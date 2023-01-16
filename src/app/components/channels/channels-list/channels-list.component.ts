import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'src/app/models/channel.model';
import { ChannelsService } from 'src/app/services/channels.service';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.css']
})
export class ChannelsListComponent implements OnInit {
  channels: Channel[] = [];
  @Input()
  searchCriteria: string = '';
  
  constructor(private channelsService: ChannelsService) {
   }

  ngOnInit(): void {
    this.channelsService.getChannels().subscribe(
      c => {
        this.channels = c;
        this.channels.forEach(c => c.prorussianCoefficient.calculatedCoefficient = 1 - c.prorussianCoefficient.calculatedCoefficient);
      }
    );
  }

}
