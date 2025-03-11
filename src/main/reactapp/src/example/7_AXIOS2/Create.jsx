import React, { useState } from 'react';
import axios from 'axios';

export default function Create(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [comment, setComment] = useState('');

    const handleCreate = async () => {
        const productDto = {
            name: name,
            price: price,
            comment: comment
        };

        try {
            const response = await axios.post('http://192.168.40.31:8080/day08/products', productDto);
            if (response.data == true) {
                alert('등록 성공!');
                setName('');
                setPrice('');
                setComment('');
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
                <h2>Create 페이지</h2>
                <label>
                    제품명:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <br />
                <label>
                    가격:
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </label>
                <br />
                <label>
                    내용:
                    <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
                </label>
                <br />
                <button onClick={handleCreate}>등록</button>
            </div>
        </>
    );
}
