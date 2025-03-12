import {BrowserRouter, Route, Routes} from 'react-router-dom';
/*라우터로 연결할 컴포넌트 가져온다*/
import Create from './Create.jsx';
import Read from './Read.jsx';
import SideBar from './SideBar.jsx';
import BookView from './BookView.jsx';
import Update from './Update.jsx';

import'./app.css'

// App.jsx : 라우터(가상URL)이용한 라이팅
export default function App(props){
    return(<>
    <BrowserRouter>{/*모든 라우터를 감싼다*/}
        <div id = "wrap">
            <SideBar/>
            <Routes> {/*가상 으로 정의한 URL 감싼다 */}
                <Route exact path="/create" element={<Create />} />{}
                <Route exact path="/read" element={<Read />} />{} 
                <Route exact path="/book/:bno" element={<BookView />} />
                <Route exact path="/update/:bno" element={<Update />} />
            </Routes>
        </div>
    </BrowserRouter>
    </>)
}