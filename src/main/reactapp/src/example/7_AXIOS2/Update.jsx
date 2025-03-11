import React, { useState } from 'react';
import axios from 'axios';

export default function Update(props) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [comment, setComment] = useState('');

    const handleUpdate = async () => {
        const productDto = {
            id : id,
            name: name,
            price: price,
            comment: comment
        };

        try {
            const response = await axios.put('http://192.168.40.31:8080/day08/products', productDto);
            if (response.data == true) {
                alert('수정 성공!');
                setId('');
                setName('');
                setPrice('');
                setComment('');
            } else {
                alert('수정 실패!');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div>
                <h2>Update 페이지</h2>
                <label>
                    제품번호 :
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
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
                <button onClick={handleUpdate}>수정</button>
            </div>
        </>
    );
}
