import { useState } from "react";

export default function WithState(){

    
    console.log(`log from WithState(parent) class `);
    
    

    return (
        <div

            onClick={() => console.log("Parent Click")}

        >

            <Childclass />

        </div>
    )
}

function Childclass(){
    const [count , setCount] = useState(1);

    console.log(`log from child class `);

    
    function increment(){
        setCount(count+1);
        console.log(`button clicked :${count} `);
        setCount(count+1);
        console.log(`After first setCount : ${count}`)

        
    }

    function properIncr(){
        setCount(prev => prev + 1)
        console.log(`button clicked properInc : ${count}`)
        setCount(prev => prev + 1)
        console.log(`after first  setCount properInc : ${count}`)
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={properIncr}>
                +
            </button>
        </>
    )
}