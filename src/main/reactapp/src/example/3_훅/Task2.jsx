/*
    리엑트 과제3 : 리엑트 전화번호부 만들기
    조건1 : '이름' 이랑 '전화번호' 입력받아 배열에 저장
    조건2 : 저장된 배열내 모든 정보(이름/전화번호)를 table 또는 ol 또는 ul로 모두 출력
    조건3 : useState 사용
*/
import { useState } from "react";

export default function Task2(props) {
  const [username, setUsername] = useState("");
  const [userNum, setUserNum] = useState("");
  const [users, setUsers] = useState([]); 

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const numChange = (event) => {
    setUserNum(event.target.value);
  };

  const handleOnClick = () => {
    const user = {
      userName: username,
      userNum: userNum,
    };

    setUsers([...users, user]);
  };

  return (
    <div>
      <div>
        <h3>이름 입력</h3>
        <input value={username} onChange={handleChange} />
        <h3>전화번호 입력</h3>
        <input value={userNum} onChange={numChange} /> <br/>
        <button onClick={handleOnClick}>저장</button>
      </div>
      <div>
        <h3>전화번호부</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              이름 : {user.userName} <br/>
              전화번호 : {user.userNum}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
