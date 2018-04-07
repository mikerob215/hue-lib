import {indexBy, prop} from 'ramda';
import {HttpGet} from "./utils/http-utils";

interface IHub {
    id: HubId;
    internalipaddress: InternalIpAddress;
}

type HubId = string;
type InternalIpAddress = string;

export function discover() {
    return HttpGet<IHub[]>('https://www.meethue.com/api/nupnp').map(indexBy(prop('id')));
}

export function hueFactory(hub: IHub) {

    return {
        connect() {
            return HttpGet(`http://${hub.internalipaddress}/api/hue-lib`);
        },
    };
}
