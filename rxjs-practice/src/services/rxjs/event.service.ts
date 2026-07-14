import { ReplaySubject } from "rxjs";

export const eventLog$ =
    new ReplaySubject<string>(10);