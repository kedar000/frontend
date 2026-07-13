import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { interval, Observable } from "rxjs";
import Observable_vs_Subject from './observable_vs_subject'

function App() {
  // const [count, setCount] = useState(0)


// const observable = new Observable<string>((subscriber)=>{
//   console.log(`observable started `);
//   subscriber.next("hello")
//   subscriber.next("from")
//   // subscriber.error("error occured while printing the values")
//   subscriber.next("Kedar")

//   subscriber.complete()
  
// })

// const observer = {
//   next(value : string){
//     console.log(`value : ${value}`);
    
//   },
//   error(error: Error){
//     console.log(`error : ${error}`);
    
//   },
//   complete(){
//     console.log("Observable completed ");
    
//   }
// }

// observable.subscribe(observer)

// const timeObservable = interval(1000);

//   timeObservable.subscribe((value)=>{
//     console.log(value)
//   })

  // observable.subscribe((value)=>{
    
    
  // })


//   useEffect(() => {

//     console.log(`component mounted `);
    
//     const subscription = interval(1000).subscribe(value => {
//         console.log(value);
//     });

//     return () => {
//       console.log(`component unmounted `)

//         subscription.unsubscribe();

//     };

// }, []);



  return (
    <>
<Observable_vs_Subject />
      
    </>
  )
}

export default App
