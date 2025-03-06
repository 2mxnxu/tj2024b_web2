import { useState } from "react";

export default function Example3(props) {

    // (1) 일반적인 JS 방법
    const 입력함수 = () => {
        const msg = document.querySelector('#msg').value;
        console.log(msg);
    }

    // (2) 리엑트 방법
    const [msg, setMsg] = useState('') // 상태 (state) 변수 : 변수값에 따른 컴포넌트를 렌더링 제공
    const 입력함수2 = (eventObj) => {
        console.log(eventObj);
        console.log(eventObj.target);
        console.log(eventObj.target.value);

        setMsg(eventObj.target.value);
    }

    // (3) 이미지를 저장하는 state 변수 선언
    const [image, setImage] = useState('보노보노1.jpg')

    const 변경함수3 = () => {
        // state변수의 값이 변경되면 자동으로 새로고침/렌더링/컴포넌트재호출/함수재호출/함수다시return // -> 리엑트 UI 업데이트
        // state 변수의 값을 변경하는 방법 : set변수명(새로운값)
        setImage(image === '보노보노1.jpg' ? '보노보노2.jpg' : '보노보노1.jpg')
    }

    return (<>
        <input id="msg"/> <br />
        <button onClick={입력함수}>입력버튼</button>

        <h1> 리엑트 방법</h1>
        <input value={msg} onChange={입력함수2} /> <br />

        <h1>리엑트 이미지 변경</h1>
        <img onClick={변경함수3} src={image} />
    </>)
}
