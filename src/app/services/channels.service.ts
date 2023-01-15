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
    },
    {
      id: '0002',
      name: 'BBB',
      subscribersNumber: 400,
      prorussianCoef: 0.5
    },
    {
      id: '0003',
      name: 'CCC',
      subscribersNumber: 500,
      prorussianCoef: 1.0
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
