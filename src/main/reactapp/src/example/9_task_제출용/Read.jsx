import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Read(props) {
    useEffect(() => {
        onRead();
    },[])

    const onRead = async () =>{
        const response = await axios.get('http://192.168.40.31:8080/task/book')
        console.log(response.data);
        setBook( response.data );
    }
    const [book, setBook] = useState([])
    
    return(<>
        <div> 
            <h3> 전체조회 페이지 </h3> 
            <table>
                <thead>
                    <tr><th> 번호</th><th>책이름</th><th>작가명</th><th>책소개</th></tr>
                </thead>
                <tbody>
                    {
                        book.map( ( book , index ) => { 
                            return ( <tr key={index}>
                                <Link to={`/book/${book.bno}`}>{book.bno}</Link>
                                <td>{ book.bname }</td>
                                <td>{ book.bauthor }</td>
                                <td>{ book.bintro }</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    </>)
}