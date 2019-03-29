import { Pipe, PipeTransform } from '@angular/core';
import {StatusCode} from "../models/StatusCode";
import {forEach} from "@angular/router/src/utils/collection";

@Pipe({
  name: 'statusCodeFillPipe'
})
export class StatusCodeFillPipePipe implements PipeTransform {

  transform(statusCodes: StatusCode[], args?: string): StatusCode[] {
    statusCodes.forEach(function(code){
      code.objectTypeName=code.objectType.name;
    });
    return statusCodes;
  }

}
