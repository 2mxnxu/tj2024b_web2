import {BrowserRouter, Route, Routes} from 'react-router-dom';
/*라우터로 연결할 컴포넌트 가져온다*/
import Home from './Home.jsx';
import Create from './Create.jsx';
import Read from './Read.jsx';
import Update from './Update.jsx';
import Delete from './Delete.jsx';
import SideBar from './SideBar.jsx';
import'./app.css'
// App.jsx : 라우터(가상URL)이용한 라이팅
export default function App(props){
    return(<>
    <BrowserRouter>{/*모든 라우터를 감싼다*/}
        <div id = "wrap">
            <SideBar/>
            <Routes> {/*가상 으로 정의한 URL 감싼다 */}
                <Route exact path="/" element={<Home />} /> {}
                <Route exact path="/create" element={<Create />} />{}
                <Route exact path="/read" element={<Read />} />{}
                <Route exact path="/update" element={<Update />} />{}
                <Route exact path="/delete" element={<Delete />} />{}
            </Routes>
        </div>
    </BrowserRouter>
    </>)
}