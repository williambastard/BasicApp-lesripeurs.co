import { delay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ShowDateTimeService } from '../services/showdatetime.service';

@Component({
  selector: 'app-showdatetime',
  templateUrl: './showdatetime.component.html',
  styleUrls: ['./showdatetime.component.scss']
})

export class ShowDateTimeComponent implements OnInit {

  public loader = false;
  public time: string = null;
  public milliseconds_since_epoch: number = null;
  public date: string = null;
  public dateFormat: string = null;

  constructor(
    private _showdatetime: ShowDateTimeService,
  ) { }

  public ngOnInit() {
    this.getTime();
  }

  public getTime() {
    this.loader = true;
    this._showdatetime.getTime().pipe(delay(500)).subscribe((data) => {
      this.loader = false;
      this.date = data.date;
      this.date = data.time;
      this.dateFormat = new Date(`${data.date} ${data.time}`).toLocaleString('en-US', { timeZone: 'Australia/Sydney' });
      this.milliseconds_since_epoch = data.milliseconds_since_epoch;
    });
  }
}
