import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function BookView(props) {
    const navigate = useNavigate(); 
    const { bno } = useParams();  
    const [book, setBook] = useState();

    useEffect(() => {
        onRead();
    }, [bno]);  

    const onRead = async () => {
        try {
            const response = await axios.get(`http://192.168.40.31:8080/task/book/view?bno=${bno}`);
            console.log(response.data);  
            setBook(response.data);      
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditClick = (bno) => {
        navigate(`/update/${bno}`);
    }

    const handleDelete = async () => {
        const password = prompt("삭제를 위한 비밀번호를 입력하세요");  

        if (password) {
            try {
                const response = await axios.get(`http://192.168.40.31:8080/task/book/view?bno=${bno}`);
                
                if (response.data.bpwd == password) {
                    const deleteResponse = await axios.delete(`http://192.168.40.31:8080/task/book?bno=${bno}`);
                    if (deleteResponse.data == true) {
                        alert('삭제 성공!');
                        navigate("/read");  
                    } else {
                        alert('삭제 실패!');
                    }
                } else {
                    alert('비밀번호가 일치하지 않습니다.');
                }
            } catch (error) {
                console.log(error);
                alert('삭제 중 오류가 발생했습니다.');
            }
        } 
    };

    if (book) {
        return (
            <div>
                <h3>책 상세 정보</h3>
                <p>책 이름: {book.bname}</p>
                <p>작가명: {book.bauthor}</p>
                <p>책 소개: {book.bintro}</p>
                <button onClick={() => handleEditClick(book.bno)}>수정</button>
                <button onClick={handleDelete}>삭제</button>
            </div>
        );
    } 
}
