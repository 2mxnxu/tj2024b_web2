import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Read(props) {
    useEffect(() => {
        onRead();
    },[])

    const onRead = async () =>{
        const response = await axios.get('http://192.168.40.31:8080/day08/products')
        console.log(response.data);
        setProducts( response.data );
    }
    const [products, setProducts] = useState([])
    
    return(<>
        <div> 
            <h3> Read 페이지 </h3> 
            <table>
                <thead>
                    <tr><th> 번호</th><th>제품명</th><th>제품설명</th><th>제품가격</th></tr>
                </thead>
                <tbody>
                    {
                        products.map( ( product , index ) => { 
                            return ( <tr key={index}>
                                <td> { product.id }</td>
                                <td> { product.name }</td>
                                <td> { product.comment }</td>
                                <td> { product.price }</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    </>)
}