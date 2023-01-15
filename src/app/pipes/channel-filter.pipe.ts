import { Pipe, PipeTransform } from '@angular/core';
import { Channel } from '../models/channel.model';
/*
 * Filter channels list based on searchCriteria
 * Usage:
 *   value | channelFilter:searchCriteria
*/
@Pipe({name: 'channelFilter'})
export class ChannelFilterPipe implements PipeTransform {
  transform(value: Channel[], searchCriteria = ''): Channel[] {
    return value.filter(c => c.channelName.toUpperCase().includes(searchCriteria?.toUpperCase()));
  }
}