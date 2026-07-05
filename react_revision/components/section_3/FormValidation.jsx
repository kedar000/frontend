import { useState } from "react";

export default function FormValidation() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    function handleChange(e){

        const value = e.target.value;

        setEmail(value);

        console.log(value)
        if(value.includes("@")){
            setError("");
        }else{
            setError("Invalid Email");
        }
    }

    function setValue(e){
        setEmail(e.target.value)
    }

    return(
        <>
            <input
                value={email}
                onChange={setValue}
                onBlur={handleChange}
            />

            <p>{error}</p>
        </>
    )
}