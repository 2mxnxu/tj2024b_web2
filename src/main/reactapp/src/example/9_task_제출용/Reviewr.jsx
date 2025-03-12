import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Reviewr(props) {
    const [rno, setRno] = useState('');
    const [bno, setBno] = useState('');
    const [rcontent, setRcontent] = useState('');
    const [rpwd, setRpwd] = useState('');
    const navigate = useNavigate();
    
    const handleCreate = async () => {
        const reviewDto = {
            rno : rno,
            bno : bno,
            rcontent : rcontent,
            rpwd : rpwd
        };

        try {
            const response = await axios.post('http://192.168.40.31:8080/task/review', reviewDto);
            if (response.data == true) {
                alert('등록 성공!');
                navigate("/read");  
                setBno('');
                setRcontent('');
                setRpwd('');
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
                    책번호:
                    <input type="number" value={bno} onChange={(e) => setBno(e.target.value)}/>
                </label>
                <br />
                <label>
                    리뷰내용:
                    <input type="text" value={rcontent} onChange={(e) => setRcontent(e.target.value)}/>
                </label>
                <br />
                <label>
                    비밀번호:
                    <input type="text" value={rpwd} onChange={(e) => setRpwd(e.target.value)}/>
                </label>
                <br />
                <button onClick={handleCreate}>등록</button>
            </div>
        </>
    );
}
