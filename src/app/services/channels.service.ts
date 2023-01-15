import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Channel } from 'src/app/models/channel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
private baseUrl: string = 'https://localhost:7081/api/channels/';
  channels: Channel[] = [
    {
      channelId: '0001',
      channelName: 'AAA',
      prorussianCoefficient: {
        channelId: '0001',
        calculatedCoefficient: 0
      },
      statistics: {
        channelId: '0001',
        viewsTotalCount: 100,
        forwardsTotalCount: 50,
        reactions: 'aa',
        lastPublicationDate: new Date()
      }
    },
    {
      channelId: '0002',
      channelName: 'BBB',
      prorussianCoefficient: {
        channelId: '0002',
        calculatedCoefficient: 0
      },
      statistics: {
        channelId: '0002',
        viewsTotalCount: 200,
        forwardsTotalCount: 100,
        reactions: 'bb',
        lastPublicationDate: new Date()
      }
    },
    {
      channelId: '0003',
      channelName: 'CCC',
      prorussianCoefficient: {
        channelId: '0003',
        calculatedCoefficient: 0
      },
      statistics: {
        channelId: '0003',
        viewsTotalCount: 300,
        forwardsTotalCount: 150,
        reactions: 'cc',
        lastPublicationDate: new Date()
      }
    }
  ]

  constructor(private http: HttpClient) { 
  }

  getChannels(): Observable<Channel[]>
  {
    return this.http.get<Channel[]>(this.baseUrl);
    //return this.channels;
  }

  getChannel(id: string): Observable<Channel>
  {
    return this.http.get<Channel>(`${this.baseUrl}${id}`);
    //return this.channels.filter(c => c.channelId == id)[0];
  }

  addChannel(name: string): Observable<string>
  {
    return this.http.post<string>(this.baseUrl, name);
  }

}
