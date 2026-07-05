import { useEffect, useState } from "react";

export default function UseEffectmodule() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  console.log("Render");

  useEffect(() => {
    console.log("Runs after every render");
  });

  useEffect(() => {
    console.log("Runs only once");
  }, []);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <br /><br />

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
    </div>
  );
}



  function UseEffectmodule_() {

  useEffect(() => {
    console.log("Effect");
  });

  console.log("Render");

  return <h1>Hello</h1>;
}

export function UseEffectWithOutDepArray(){

    useEffect(()=>{
        console.log("Called useeffect  : UseEffectWithOutDepArray")
    })

    console.log("rendering..... : UseEffectWithOutDepArray")
    return (
        <>
            <div>Useeffect with out dependency array</div>
        </>
    )
}

export function UseEffectWithDepArray(){

    useEffect(()=>{
        console.log("Called useeffect  : UseEffectWithDepArray")
    },[])

    console.log("rendering..... : UseEffectWithDepArray")
    return (
        <>
            <div>Useeffect with out dependency array</div>
        </>
    )
}

export function UseEffectWithDepArrayCount(){

    const [count , setCount ] = useState(0);
    useEffect(()=>{
        console.log("Called useeffect  : UseEffectWithDepArrayCount")
    },[count])

    console.log("rendering..... : UseEffectWithDepArrayCount")

    function incre(){
        setCount((prev) => prev + 1)
    }
    return (
        <>
            <div>Useeffect with out dependency array</div>
            <button onClick={incre}> counter : {count}</button>
        </>
    )
}
