import { useEffect, useState } from "react";
import axios from "axios";

export default function Task(props) {
  const [formData, setFormData] = useState({ username: '', usernum: '' });

  const formDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onPost = async () => {
    try {
      const response = await axios.post('http://192.168.40.31:8080/task/num', formData);
      if (response.data === true) {
        alert('등록 성공!');
        setFormData({ username: '', usernum: '' }); 
        onFindAll(); 
      } else {
        alert('등록 실패!');
        setFormData({ username: '', usernum: '' }); 
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    onFindAll();
  }, []);

  const [users, setUsers] = useState([]); 

  const onFindAll = async () => {
    try {
      const response = await axios.get('http://192.168.40.31:8080/task/num');
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <h4>입력 폼</h4>
        <form>
          이름 : <input type="text" value={formData.username} name='username' onChange={formDataChange} /><br />
          전화번호 : <input type="text" value={formData.usernum} name='usernum' onChange={formDataChange} /><br />
          <button type="button" onClick={onPost}>등록</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>전화번호</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody> 
          {
          users.map((user, index) => (
            <tr key={index}>
                <td>{user.username}</td>
                <td>{user.usernum}</td>
                <td>수정버튼 / 삭제버튼</td>
            </tr>
        ))
}    
          </tbody>
        </table>
      </div>
    </>
  );
}