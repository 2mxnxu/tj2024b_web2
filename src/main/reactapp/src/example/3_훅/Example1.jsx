let a = 0
export default function Example1(props) {

    let b = 0;
    ++a;
    ++b;

    const 증가함수 = ( ) => {
        ++a;
        ++b;

        console.log(a);
        console.log(a);
    }

    return(<>
        <div>{++a}</div>
        <div>{++b}</div>
        <button type="button" onClick={증가함수}>증가함수</button>
    </>)
}