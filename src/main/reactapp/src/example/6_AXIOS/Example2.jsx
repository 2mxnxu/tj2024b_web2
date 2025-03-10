import axios from "axios";
import { useState } from "react";

export default function Example2(props) {

    // [1] 입력받은 데이터를 저장하는 폼 state 변수
    const [formData, setFormData] = useState({writer:'', content : '', pwd : ''});
    // [2] 입력받은 데이터를 렌더링 하는 이벤트 함수
    const formDataChange = (e) => {
        console.log(e.target); // 이벤트를 발생한 html dom(마크업/태그)
        console.log(e.target.name); // 이벤트를 발생한 html dom(마크업/태그)의 name 속성 값 반환
        console.log(e.target.value); // 이벤트를 발생한 html dom(마크업/태그)의 value 속성 값 반환
        // 스프레드 연산자 이용한 state 변수 변경
        // -> setXXX({...기존객체, 새로운속성명 : 새로운값}) * 만약에 새로운 속성명이 이미 존재하면 수정
        setFormData({...formData, [e.target.name] : e.target.value});
    }
    // [3] 현재 state 변수를 스프링 서버에게 보내기, Axios
    const onPost = async (e) => {
        try{
            const response = await axios.post('http://localhost:8080/day07/react',formData); // state 변수를 axios로 보내기
            if(response.data == true){
                alert('등록 성공!');
                setFormData({writer:'', content : '', pwd : ''}); // state 변수 초기화
            }else{
                alert('등록 실패!');
                setFormData({writer:'', content : '', pwd : ''}); 
            }
        }catch(e){console.log(e);}
    }
    return(<>
    <div>
        <h4> 입력 폼</h4>
        <form>
            작성자 : <input type="text" value={formData.writer} name='writer' onChange={formDataChange}/> <br/>
            방문록 : <input type="text" value={formData.content} name='content' onChange={formDataChange}/> <br/>
            비밀번호 : <input type="text" value={formData.pwd} name='pwd' onChange={formDataChange}/> <br/>
            <button type="button" onClick={onPost}>등록</button>
        </form>
    </div>
    </>)

}
