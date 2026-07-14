import { useEffect } from "react";
import {
  searchEmployees,
  searchSubject,
} from "../services/rxjs/search.service";
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  finalize,
  map,
  of,
  retry,
  switchMap,
  tap,
} from "rxjs";
import { eventLog$ } from "../services/rxjs/event.service";

function SearchBox() {
  useEffect(() => {
    const subscription = searchSubject
      .pipe(
        map((query) => query.trim().toLowerCase()),
        filter((query) => query.length > 3),
        debounceTime(300),
        distinctUntilChanged(),

        tap((query) => console.log(`Searching : ${query}`)),
        tap((query) => eventLog$.next(`Search : ${query}`)),

        switchMap((query) =>
          searchEmployees(query).pipe(
            retry(2),
            catchError((err) => {
              console.log(`Error : ${err}`);
              return of([]);
            }),
            finalize(() => {
              console.log("Finalize called");
            })
          )
        ),

        tap((results) => console.log(`Result : ${results}`))
      )
      .subscribe({
        next: (value) => {
          console.log(`Searching : ${value}`);
        },
      });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0"> Search</h5>

      </div>

      <div className="card-body">
        <p className="text-muted mb-3">
          Search
        </p>

        <div className="input-group">
          

          <input
            type="text"
            className="form-control"
            placeholder="Search employees..."
            onChange={(e) => searchSubject.next(e.target.value)}
          />
        </div>

        <small className="text-muted d-block mt-3">
          • Minimum 4 characters
          <br />
          • Debounced for 300 ms
          
        </small>
      </div>
    </div>
  );
}

export default SearchBox;