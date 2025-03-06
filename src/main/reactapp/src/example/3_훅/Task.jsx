import { useState } from "react"

export default function Task1(props) {
    
    // (1) 여기에 state 변수 만들기
    const [msg, setMsg] = useState('')

    const handleChange = (event) => {
        setMsg(event.target.value);
        // (2) 여기에서 state 변수값 수정하기.
    }

    return (
        <>
            <h1> input에 입력하면 실시간으로 글자 수 세기</h1>
            <input value={msg} onChange={handleChange}/>
            <p>글자 수: {msg.length}</p>
        </>
    )
}