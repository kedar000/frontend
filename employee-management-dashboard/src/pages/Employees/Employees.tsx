import { useEffect } from "react";

function Employees(){
    console.log(`employee rendered ....`);

    useEffect(()=>{
        console.log('employee mounted')

        return()=>{
            console.log('employee unmounted')
        }
    }, [])
    
    return(
        <>
        <h1>Emplyees</h1>
        </>
    )
}

export default Employees;