import {Observable} from "@reactivex/rxjs";
import axios from "axios";
import {prop} from 'ramda';

export function HttpGet<Response>(url: string, config?) {
    return Observable.fromPromise<Response>(axios.get(url, config).then(prop('data')));
}
