import axios from 'axios';
import {prop, indexBy} from 'ramda';
import {Observable} from "@reactivex/rxjs";

interface Hub {
    id: HubId;
    internalipaddress: InternalIpAddress;
}

type HubId = string;
type InternalIpAddress = string;

export function HttpGet<Response>(url: string, config?) {
    return Observable.fromPromise<Response>(axios.get(url, config).then(prop('data')))
}

export function discover() {
    return HttpGet<Hub[]>('https://www.meethue.com/api/nupnp').map(indexBy(prop('id')))
}

export function hueFactory(hub: Hub) {

    return {
        connect() {
            return HttpGet(`http://${hub.internalipaddress}/api/hue-lib`)
        }
    }
}