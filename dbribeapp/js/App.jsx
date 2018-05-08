import {UI} from "ui/UI";
import {MAIN_ROUTE} from "./Routes"
import {EstablishmentApp} from "EstablishmentApp";
import {Theme} from "UI";

Theme.Global.setProperties({
    NAV_MANAGER_NAVBAR_HEIGHT: 0,
    COLOR_BACKGROUND: "#fff",
    COLOR_BACKGROUND_BODY: "#fff",
});

export class AppClass extends EstablishmentApp {
    static registerWebsocketStreams() {}

    getRoutes() {
        return MAIN_ROUTE;
    }
}