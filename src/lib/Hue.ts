import {HttpGet} from "../utils/http-utils";
import {IHub} from "./HueTypes";

export class Hue {
    private baseUrl: string = `http://${this.hub.internalipaddress}/api/${this.username}`;

    private constructor(private hub: IHub, private username: string) {
    }

    public static HueFactory(hub: IHub, username: string) {
        return new Hue(hub, username);
    }

    public getLights() {
        return HttpGet(this.baseUrl + '/lights');
    }
}
