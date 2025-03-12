import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create(props) {
    const [bname, setBname] = useState('');
    const [bauthor, setBauthor] = useState('');
    const [bintro, setBintro] = useState('');
    const [bpwd, setBbpwd] = useState('');
    const navigate = useNavigate();
    
    const handleCreate = async () => {
        const bookDto = {
            bname: bname,
            bauthor: bauthor,
            bintro: bintro,
            bpwd : bpwd
        };

        try {
            const response = await axios.post('http://192.168.40.31:8080/task/book', bookDto);
            if (response.data == true) {
                alert('등록 성공!');
                navigate("/read");  
                setBname('');
                setBauthor('');
                setBintro('');
                setBbpwd('');
            } else {
                alert('등록 실패!');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div>
                <h2>등록 페이지</h2>
                <label>
                    제목:
                    <input type="text" value={bname} onChange={(e) => setBname(e.target.value)}/>
                </label>
                <br />
                <label>
                    작가:
                    <input type="text" value={bauthor} onChange={(e) => setBauthor(e.target.value)}/>
                </label>
                <br />
                <label>
                    소개:
                    <input type="text" value={bintro} onChange={(e) => setBintro(e.target.value)}/>
                </label>
                <br />
                <label>
                    비밀번호:
                    <input type="password" value={bpwd} onChange={(e) => setBbpwd(e.target.value)}/>
                </label>
                <br />
                <button onClick={handleCreate}>등록</button>
            </div>
        </>
    );
}
