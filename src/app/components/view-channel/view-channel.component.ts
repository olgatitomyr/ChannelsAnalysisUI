import { Component, OnInit, ViewChild } from '@angular/core';
import { Channel } from 'src/app/models/channel.model';
import { ChannelsService } from 'src/app/services/channels.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-view-channel',
  templateUrl: './view-channel.component.html',
  styleUrls: ['./view-channel.component.css']
})
export class ViewChannelComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ ],
    datasets: [
      { data: [], label: 'Реакції' }
    ]
  };
  channel: Channel = {
    id: '',
    channelName: '',
    statistics: {
      channelId: '',
      lastPublicationDate: new Date(),
      viewsTotalCount:0,
      forwardsTotalCount:0,
      reactions: '{}'
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
          this.channel = c;
          this.channel.statistics.reactions = this.unicodeToChar(this.channel.statistics.reactions);

          this.prepareChartData();
        })
    });
  }
  
  private unicodeToChar(text: string) {
    return text.replace(/\\\\u[\dA-Fa-f]{1,8}/gi, 
      function (match) {
          return String.fromCodePoint(parseInt(match.replace(/\\\\u/gi, ''), 16));
      });
  }

  private prepareChartData() {
    try {
      let reactionInfo = JSON.parse(this.channel.statistics.reactions);
      this.channel.prorussianCoefficient.calculatedCoefficient = 1 - this.channel.prorussianCoefficient.calculatedCoefficient;
      this.barChartData.labels = Object.entries(reactionInfo).map(e => e[0]);
      this.barChartData.datasets[0].data = Object.entries(reactionInfo).map(e => {
        const value: any = e[1];
        return parseInt((value?.toString() || ''));
      });
      this.chart?.update();
    } catch {}
  }
}
