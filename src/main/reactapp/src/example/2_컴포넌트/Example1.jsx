function Example1(props) {
    return(
        <div>
            {/**/ }
            <h3> 컴포넌트</h3>
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
