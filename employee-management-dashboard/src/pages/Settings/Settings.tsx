import { useEffect } from "react";

export default function Settings(){
    console.log(`setting rendered....`);

    useEffect(()=>{
        console.log('settings mounted ')

        return ()=>{
            console.log('setting unmounted')
        }
    }, [])
    
    return(
        <>
            <h1>Settings </h1>
        </>
    )
}