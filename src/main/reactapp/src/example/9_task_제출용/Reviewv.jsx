import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ReviewList() {
    const [books, setBooks] = useState([]);  
    const [selectedBno, setSelectedBno] = useState('');  
    const [reviews, setReviews] = useState([]);  

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://192.168.40.31:8080/task/book');
            setBooks(response.data); 
        } catch (error) {
            console.log(error);
        }
    };

    const fetchReviews = async (bno) => {
        if (!bno) return;  
        try {
            const response = await axios.get(`http://192.168.40.31:8080/task/review?bno=${bno}`);
            setReviews(response.data);  
        } catch (error) {
            console.log(error);
        }
    };

    const handleBookChange = (e) => {
        const selectedBno = e.target.value;
        setSelectedBno(selectedBno);  
        fetchReviews(selectedBno);  
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div>
            <h2>책 별 리뷰 조회</h2>

            <label htmlFor="book-select">책 선택:</label>
            <select id="book-select" value={selectedBno} onChange={handleBookChange}>
                <option value="">책을 선택하세요</option>
                {books.map((book) => (
                    <option key={book.bno} value={book.bno}>
                        {book.bname} ({book.bauthor})
                    </option>
                ))}
            </select>

            <div>
    <h3>리뷰 목록</h3>
    {reviews.length > 0 && (
        <div>
            {reviews.map((review) => (
                <div key={review.rno}>
                    <p>리뷰 내용: {review.rcontent}</p>
                </div>
            ))}
        </div>
    )}
    {reviews.length == 0 && (
        <p>이 책에 대한 리뷰가 없습니다.</p>
    )}
</div>
        </div>
    );
}
