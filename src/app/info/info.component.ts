import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  info: any  = '';
  constructor(
    private _info: MyServiceService
  ) { }

  ngOnInit(): void {
    this._info.getInfo().subscribe((response: any)=> {
      console.log(response);
      this.info = response;
    })
  }
}