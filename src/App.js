import React from "react";
import { useState,useTransition } from "react";
import { num } from "./numberCounter";

const App = () => {
  const [value, setValue] = useState("");
  const [numbers , setNumbers] = useState(num());
  const [isPending,startTransition] = useTransition();


  const valueHandler = (e) => {
    setValue(e.target.value)
    startTransition(()=>{
      setNumbers(num(e.target.value))
    })
  }

  return <div>

    <input value={value} type="text" onChange={valueHandler} />
    {isPending ? <h1>Loading</h1> : null}
    {numbers.map(item=><p>{item}</p>)}

  </div>;
};

export default App;
