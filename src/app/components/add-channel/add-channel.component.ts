import { Component, OnInit } from '@angular/core';
import { ChannelsService } from 'src/app/services/channels.service';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.css']
})
export class AddChannelComponent implements OnInit {
  channelName: string = '';

  constructor(private channelsService: ChannelsService) { }

  ngOnInit(): void {
  }

  addChannel(): void {
    this.channelsService.addChannel(this.channelName).subscribe(
      () => alert(`Запит на додавання каналу "${this.channelName}" створено. Обробка запиту триватиме до однієї хвилини`));
  }
}
