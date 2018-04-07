import {discover, hueFactory} from "./HueFactory";

discover().subscribe((hubIndex) => {
    Object.keys(hubIndex).forEach((id) => hueFactory(hubIndex[id]).connect().subscribe(console.log));
});
