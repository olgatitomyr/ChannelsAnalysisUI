import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Channel } from 'src/app/models/channel.model';



@Injectable({
  providedIn: 'root'
})
export class ChannelsService {


  channels: Channel[] = [
    {
      id: '0001',
      name: 'AAA',
      subscribersNumber: 300,
      prorussianCoef: 0.0
    }
  ]

  constructor(/*private http: HttpClient*/) { 
  }

  getChannels(): Channel[]
  {
    return this.channels;
  }

  getChannel(id: string): Channel
  {
    return this.channels.filter(c => c.id == id)[0];
  }

}
