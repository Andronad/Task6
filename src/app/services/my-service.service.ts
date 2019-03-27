import { Injectable } from '@angular/core';
import {StatusCode} from "../models/StatusCode";
import {STATUS_CODES} from "../mocks/status-codes-mock";
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  statusCodes: StatusCode[];

  constructor() {
  }
  public getCodes(){
    this.statusCodes = STATUS_CODES;
    return this.statusCodes;
  }
}
