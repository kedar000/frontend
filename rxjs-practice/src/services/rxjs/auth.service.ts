import { BehaviorSubject } from "rxjs";

export interface User {
    id: number;
    name: string;
}

export const currentUser$ =
    new BehaviorSubject<User | null>(null);