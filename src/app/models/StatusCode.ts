import {ObjectType} from "./ObjectType";

export class StatusCode {
  constructor(public id: number,
              public code: string,
              public description: string,
              public objectType: ObjectType,
              public objectTypeName: string,
              public issueGrouping: boolean,
              public createIncidents: boolean,
              public status: string) {
  }
}
