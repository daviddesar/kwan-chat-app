import { Location } from "history";
import { StringQueryParam } from "./types";


export interface IHistory {
    location: Location;
  }
export interface IMessageInfo {
    username: StringQueryParam,
    message: string
}