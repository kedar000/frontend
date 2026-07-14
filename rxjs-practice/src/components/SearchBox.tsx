// SearchBox.tsx

import { useEffect } from "react";
import { searchEmployees, searchSubject } from "../services/rxjs/search.service";
import {  catchError, debounceTime, distinctUntilChanged, filter, finalize, map, of, retry, switchMap, tap } from "rxjs";

function SearchBox() {
    useEffect(()=>{
        const subscription = searchSubject.pipe(
            map(query=>query.trim().toLowerCase()),
            filter(query => query.length > 3 ),
            debounceTime(300),
            distinctUntilChanged(),
            tap(query => console.log(`Searching : ${query}`)), // used for setloading 
            switchMap((query)=> searchEmployees(query).pipe(
                retry(2),
                catchError(err => {
                    console.log(`Error : ${err}`);
                    return of([])
                    
                }),
                finalize(()=>{
                    console.log(`Finalize called `);
                    
                })
            )),
            
            tap(results => console.log(`Result : ${results}`)),

        ).subscribe({
            next : (value) =>{
                console.log(`Searching : ${value}`)
            }
        })

        return ()=> subscription.unsubscribe()
    } , [])
  return (
    <div>
      <h2>Search Employees</h2>
      <input 
            type="text" 
            placeholder="Search..." 
            onChange={(e)=>{searchSubject.next(e.target.value)}}   />
            
    </div>
  );
}

export default SearchBox;