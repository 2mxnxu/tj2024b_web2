import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios';

export default function Signup(props) {
    const[memberInfo, setMemberInfo] = useState({mid:"", mpwd:"", mname:""})
    // 입력받은 값들을 state 렌더링 하는 함수, event : onChange 결과정보, event.target : 해당 함수를 실행시킨 마크업
    const onInputChange = (event) => {
        setMemberInfo({...memberInfo, [event.target.name]: event.target.value })
    }
    // 입력받은 첨부파일 * 첨부파일 미리보기
    const [profile, setProfile] = useState(null);
    const [preview, setPreview] = useState(null);
    const onFileChange = (event) => { console.log(event.target.files[0])
        // 1. 업로드된 파일 반환
        const file = event.target.files[0]
        // 2. state 저장
        setProfile(file)
        // 3. * 이미지 미리보기
        if(file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log(reader.result); // 읽어드린 파일 출력
                setPreview(reader.result);
            }
            reader.readAsDataURL(file)
        }else{setPreview(null);}
    }
    const navigate = useNavigate();
    // 입력받은 값들을 axios로 보내고 응답 받기
    const onSignup = async () => {
        // 1. formdata 객체 만들기, json과 다르게 문자열 아닌 바이트(바이너리) 전송을 하기 위한 폼 전송
        const formData = new FormData();
        // 2. formData에 속성 넣기, .append('속성명', 값)
        formData.append('mid', memberInfo.mid);
        formData.append('mpwd', memberInfo.mpwd);
        formData.append('mname', memberInfo.mname);
        if(profile != null) {
        formData.append('uploadfile', profile);
        }
        // 3. axios
        const option = {headers : {"Content-Type" : "multipart/form-data"}}
        // 4. axios 동기
        const response = await axios.post("http://localhost:8080/api/member/signup", formData, option);
        // 5. 응답 받기 , response.data 
        const result = response.data;
        // 6. 응답에 따른 처리
        if (result) {
            alert('회원가입 성공');
            navigate('/login')
        }else{
            alert('회원가입 실패');
        }
    }
    console.log(memberInfo);
    return(<>
        <h3> 회원가입 페이지</h3>
        <form>
        아이디 : <input type="text" name="mid" value={memberInfo.mid} onChange={onInputChange}/><br/>
            비밀번호 : <input type="password" name="mpwd" value={memberInfo.mpwd} onChange={onInputChange}/> <br/>
            닉네임 : <input type="text" name="mname" value={memberInfo.mname} onChange={onInputChange}/> <br/>
            프로필 : <input type="file" accept="image/*" onChange={onFileChange}/><br/>
            미리보기 : {preview && <img src={preview} style={{width : "200px"}} alt="preview" />} <br/>
            <button type="button" onClick={onSignup}>회원가입</button>
        </form>
    </>)
}