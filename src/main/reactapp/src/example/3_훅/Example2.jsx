import { useState } from "react";

let a = 0;
export default function Example2(props) {
    a++
    let b = 0;
    b++
    
    console.log(`전역변수 a : ${a}`)
    console.log(`지역변수 a : ${b}`)

    const 증가함수1 = () =>{
        a++, b++;
        console.log(a,b);
    }

    let c = useState(0);
    console.log(c);
    console.log(c[0]);
    console.log(c[1]);
    
    const 증가함수2 = () => {
        c[1](c[0]++)
    }
    let [count, setCount] = useState(0);

    const 증가함수3 = () =>{
        console.log(count);
        count = count+1;
        console.log(count);
        setCount(count++);
        
    }

    return(<>
        <div>
            <p>일반 변수 : {a}, {b}</p>
            <button onClick={증가함수1}>증가함수</button>
        </div>
        <div>
            <p>state 변수 : {c}</p>
            <button onClick={증가함수2}>증가함수2</button>
        </div>
        <div>
        <p>state 변수2 : {count}</p>
        <button onClick={증가함수3}>증가함수3</button>
        </div>
        </>)
}