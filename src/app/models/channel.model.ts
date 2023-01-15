import { ChannelStatistics } from "./channel-statistics.model";
import { ProrussianCoefficient } from "./prorussian_coefficient.model";

export interface Channel {
    id: string;
    channelName: string;
    statistics: ChannelStatistics;
    prorussianCoefficient: ProrussianCoefficient;
}