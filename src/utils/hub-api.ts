import {indexBy, prop} from "ramda";
import {IHub} from "../lib/HueTypes";
import {HttpGet} from "./http-utils";

export function discover() {
    return HttpGet<IHub[]>('https://www.meethue.com/api/nupnp').map(indexBy(prop('id')));
}