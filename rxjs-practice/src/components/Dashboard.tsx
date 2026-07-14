import { useEffect } from "react";
import { currentUser$ } from "../services/rxjs/auth.service";

export function Dashboard(){
    useEffect(() => {

    const subscription = currentUser$.subscribe(user => {

        console.log(`Dashboard : ${user}`);

    });

    return () => subscription.unsubscribe();

}, []);
    return (
        <>
        <div> Dashboard</div>
        </>
    )
}