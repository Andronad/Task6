import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../../services/my-service.service";
import {StatusCode} from "../../models/StatusCode";

@Component({
  selector: 'app-status-codes',
  templateUrl: './status-codes.component.html',
  styleUrls: ['./status-codes.component.scss']
})
export class StatusCodesComponent implements OnInit {
  codes:StatusCode[];
  constructor(private service: MyServiceService){
    this.codes=service.getCodes();
  }
  ngOnInit() {
  }
  public getInfo(code){
    console.log(code);
  }
}
