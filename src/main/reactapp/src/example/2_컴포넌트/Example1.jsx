function Example1(props) {
    return(
        <div>
            {/**/ }
            <h3> 컴포넌트</h3>
            {/*다른 컴포넌트 호출*/}
            <Component1/>
            <Component2/>
            <Component3/>
            <Component4/>
            <Component5/>
            <Component6/>
            <Component7/>
        </div>
    )
}
export default Example1;
function Component1(props) {
    return <h4>한줄로 입력시 () 생략 가능</h4>
}

function Component2(props) {
    return (
    <h4>두줄 이상 입력시 () 필수로 감싼다</h4>
    )
}

function Component3(props) {
    return(
        <>
        <h4>div 대신에 이름 없는 마크업 가능</h4>
        </>
    ) 
}
function Component4(props) {
    const name = '유재석'
    const age = 40;
    const obj = {name :'강호동' , age : 50}
    return(
        <>
        <h4> {name} 님의 나이 : {age}</h4>
        <h4> {obj.name} 님의 나이 : {age}</h4>
        </>
    ) 
}

function Component5(props) {
    const loginState = true;
    // JSX 문법 {} 표현식에서는 if, for, function, const, let 불가능 하다
    return(
        <>
        <h4> {loginState == true ? '로그인중' : '비로그인중'}</h4>
        <h4> {loginState && <p> 로그인 상태일때만 보이는 메시지</p>}</h4>
        </>
    ) 
}

function Component6(props) {
    const items = ['사과', '딸기' , '바나나']
    // JSX 문법 목록(li, option 등등) 마크업들에는 key 속성 필요로 한다
    return(<>
    <ul>
        {
            items.map((item, index) => (
                <li key = {index}> {item} </li>
            )
        )
        }
    </ul>
    </>)
}
import './Example1.css'
function Component7(props) {
    
    // style 속성에 style="color:blue" [x]
    // style 속성에 style={{css 객체}}
    const cssObj = {color : 'red', fontSize : 30}
    return(<>
        <h4 style={{color : 'blue'}}>인라인 형식으로 css 넣기</h4>
        <h4 style={cssObj}>인라인 형식의 객체 css 넣기</h4>
        <h4 className="myclass">CSS 파일내 선택자 이용한 css 넣기</h4>
    </>)
}