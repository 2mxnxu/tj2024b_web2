// fetch , axios 이용한 동기/비동기 통신
// 1. 설치 : 프로젝트 최상위 폴더내 터미널에서 'npm i axios'
import axios from 'axios';

export default function Example1(props){
    // [1] 이벤트 함수 + 이벤트 결과 정보(e)
    const onEvent1 = (e) => {
        // e[event 객체 : onClick 결과 정보를 매개변수로 받을 수 있다]
        console.log(e);
    }
    // [2] 이벤트 함수 + 이벤트 결과 정보(e) + 일반 매개변수
    const onEvent2 = (e, param1) => {
        console.log(e);         // 이벤트 매개변수
        console.log(param1);    // 일반 매개변수
    }
    // [3] axios get
    const onEvent3 = async () => {
        console.log('========================[1 GET]=========================')
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data);
        console.log('========================[2 GET]=========================')
        const response2 = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        console.log(response2.data);
        console.log('========================[3 GET]=========================')
        const response3 = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments?postId=1')
        console.log(response3.data);
    }
    // [4] axios post test 
    const onEvent4 = async() => {
        const obj = {userId : 1, title : 'foo', body : 'bar'}
        const response1 = await axios.post('https://jsonplaceholder.typicode.com/posts')
        console.log(response1.data)
    }
    // [5] axios put test
    const onEvent5 = async() => {
        const obj = {id : 1, userId : 1, title : 'foo', body : 'bar'}
        const response1 = await axios.put('https://jsonplaceholder.typicode.com/posts/1', obj)
        console.log(response1.data);
    }
    // [6] axios delete test
    const onEvent6 = async() => {
        const response1 = await axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        console.log(response1.data);
    }

    return(<>
        <button type='button' onClick={onEvent1}> 이벤트 함수1 </button>
        <button type='button' onClick={e => {onEvent2(e,13)}}> 이벤트 함수2 </button>
        <button type='button' onClick={onEvent3}> 이벤트 함수3 </button>
        <button type='button' onClick={onEvent4}> 이벤트 함수4 </button>
        <button type='button' onClick={onEvent5}> 이벤트 함수5 </button>
        <button type='button' onClick={onEvent6}> 이벤트 함수6 </button>
    </>)
}