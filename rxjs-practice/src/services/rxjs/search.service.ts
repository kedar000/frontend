import { Subject, of, throwError } from "rxjs";
import { delay } from "rxjs/operators";

export const searchSubject = new Subject<string>();

export function searchEmployees(query: string) {
  
    console.log(`Api called`)
    if(Math.random() > 0.5){
        return throwError(()=> new Error("Server Error "))
    }


  return of([
    `${query} Employee 1`,
    `${query} Employee 2`,
    `${query} Employee 3`,
  ]).pipe(delay(3000));
}