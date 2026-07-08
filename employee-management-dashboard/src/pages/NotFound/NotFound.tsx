import { useEffect } from "react";

function NotFound(){
    console.log('Notfound rendered')

    useEffect(()=>{
        console.log('Not found mounted ')

        return ()=>{
            console.log('Not found unmounted ')
        }
    } , [])
    return(
        <>
        <h1>Not Found</h1>
        </>
    )
}

export default NotFound;