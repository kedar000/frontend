import { useEffect } from "react"

function Profile(){
    console.log(`profile rendered.....`)

    useEffect(()=>{
        console.log('profile mounted ')

        return ()=>{
            console.log('profile unmounted ')
        }
    } , [])
    return (
        <>
            <h1>Profile</h1>
        </>
    )
}

export default Profile