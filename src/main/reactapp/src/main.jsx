import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// react18
// (!) 기본 코드 주석처리
// createRoot(document.getElementById('root')).render(
//   <App />
// )

// (*) index.html에 root DOM 가져오기.
const root = createRoot( document.querySelector('#root') )

// day01 : '컴포넌트 만들기' 렌더링 
    // import 호출할컴포넌트명 from '경로/파일명(확장자)';
import Component1 from './example/1_동작구조/Component1.jsx'
//root.render( <Component1 /> )

// day01 : 여러 컴포넌트 만들기 
import Component2 from './example/1_동작구조/Component2.jsx'
//root.render( <Component2 /> )

//import Example1 from './example/2_컴포넌트/Example1.jsx'
//root.render( <Example1/> )

//import Example2 from './example/2_컴포넌트/Example2.jsx'
//root.render(<Example2/>)

//import Task from './example/2_컴포넌트/task.jsx'
//root.render(<Task/>)

// import Example1 from './example/3_훅/Example1.jsx'
// root.render(<Example1/>)

// import Example2 from './example/3_훅/Example2.jsx'
// root.render(<Example2/>)

// import Example3 from './example/3_훅/Example3.jsx'
// root.render(<Example3/>)

// import Task from './example/3_훅/Task1.jsx'
// root.render(<Task/>)

// import Task2 from './example/3_훅/Task2.jsx'
// root.render(<Task2/>)

// import Example1 from './example/6_AXIOS/Example1.jsx'
// root.render(<Example1/>)

// import Example2 from './example/6_AXIOS/Example2.jsx'
// root.render(<Example2/>)

import Task from './example/6_AXIOS/task.jsx'
root.render(<Task/>)