export default function Example2() {
    return(<>
    <SubComponent1 name="유재석"/>
    <SubComponent1 name="강호동"/>
    <SubComponent2><button>여기가 props.children 입니다.</button> </SubComponent2>
    <SubComponent3 name="유재석" age = "40"/><br/>
    <SubComponent3 name="강호동" age = "50"/>
    <SubComponent4 nation="일본"> </SubComponent4>
    
    </>)
}

function SubComponent1(props) {
    console.log(props);
    // props.name = '신동엽'; // props 읽기모드 - 수정X
    return(<> <h3> 안녕하세요 {props.name}</h3></>)
}

function SubComponent2(props) {
    console.log(props);
    // props.name = '신동엽'; // props 읽기모드 - 수정X
    return(<> <h3> {props.children}</h3></>)
}

function SubComponent3({name , age}) {
    return(<> {name} 님 {age}살 입니다.</>)
}

function SubComponent4({nation="대한민국"}) {
    return (<><h3>{nation} 국적 입니다.</h3></>)
}