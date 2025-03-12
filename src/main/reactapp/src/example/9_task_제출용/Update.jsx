import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Update() {
    const { bno } = useParams(); 
    const [bname, setBname] = useState('');
    const [bauthor, setBauthor] = useState('');
    const [bintro, setBintro] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://192.168.40.31:8080/task/book/view?bno=${bno}`);
                setBname(response.data.bname);
                setBauthor(response.data.bauthor);
                setBintro(response.data.bintro);
            } catch (error) {
                console.error("책 정보를 가져오는 데 실패했습니다.", error);
            }
        };
        fetchBook();
    }, [bno]); 

    const handleUpdate = async () => {
        const password = prompt("삭제를 위한 비밀번호를 입력하세요");  
        const bookDto = {
            bno: bno,  
            bname: bname,
            bauthor: bauthor,
            bintro: bintro,
            bpwd: password,
        };
        try {
            const response = await axios.get(`http://192.168.40.31:8080/task/book/view?bno=${bno}`);
            if (response.data.bpwd == password) {
                const response = await axios.put(`http://192.168.40.31:8080/task/book?bno=${bno}`, bookDto); 
                if (response.data == true) {
                    setBname('');
                    setBauthor('');
                    setBintro('');
                }
                alert('수정 성공!');
                navigate("/read");  
            } else {
                alert('비밀번호가 일치하지 않습니다.');
            }
        } catch (error) {
            console.log(error);
            alert('수정 중 오류가 발생했습니다.');
        }
    };

    return (
        <>
            <div>
                <h2>수정 페이지</h2>
                <label>
                    책 이름:
                    <input type="text" value={bname} onChange={(e) => setBname(e.target.value)} />
                </label>
                <br />
                <label>
                    작가:
                    <input type="text" value={bauthor} onChange={(e) => setBauthor(e.target.value)} />
                </label>
                <br />
                <label>
                    책 소개:
                    <input type="text" value={bintro} onChange={(e) => setBintro(e.target.value)} />
                </label>
                <br />
                <button onClick={handleUpdate}>수정</button>
            </div>
        </>
    );
}
