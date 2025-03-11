import React, { useState } from 'react';
import axios from 'axios';

export default function Delete(props) {
    const [id, setId] = useState('');

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://192.168.40.31:8080/day08/products?id=${id}`);
        if (response.data == true) {
            alert('삭제 성공!');
            setId('');
        } else {
            alert('삭제 실패!');
        }
    } catch (error) {
        console.log(error);
    }
}

    return (
        <>
            <div>
                <h2>Delete 페이지</h2>
                <label>
                    제품번호 :
                    <input type="number" value={id} onChange={(e) => setId(e.target.value)}/>
                </label>
                
                <br />
                <button onClick={handleDelete}>삭제</button>
            </div>
        </>
    );
}
