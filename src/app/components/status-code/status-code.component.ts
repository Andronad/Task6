import {Component, Input, OnInit} from '@angular/core';
import {StatusCode} from "../../models/StatusCode";

@Component({
  selector: 'app-status-code',
  templateUrl: './status-code.component.html',
  styleUrls: ['./status-code.component.scss']
})
export class StatusCodeComponent implements OnInit {
  @Input() myCode:StatusCode;
  constructor() { }

  ngOnInit() {
  }

}
