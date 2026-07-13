import { Observable } from "rxjs";
import { Subject } from "rxjs";
import { ReplaySubject } from "rxjs";

export default function Observable_vs_Subject() {
  const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
  });

  observable.subscribe((value) => console.log("A:", value));

  observable.subscribe((value) => console.log("B:", value));

  const subject = new Subject<number>();

  subject.subscribe((value) => {
    console.log("A:", value);
  });

  subject.subscribe((value) => {
    console.log("B:", value);
  });

  subject.next(1);
  subject.next(2);
  subject.next(3);





    console.log("-------replay subject --------");

    const sub = new ReplaySubject<number>(1);

    sub.next(1);
    sub.next(2);
    sub.next(3);
    sub.next(4);

    sub.subscribe(value => {
        console.log("A:", value);
    });

    sub.next(5);
  
  return <>
  <h1> hello </h1>
  </>;
}
