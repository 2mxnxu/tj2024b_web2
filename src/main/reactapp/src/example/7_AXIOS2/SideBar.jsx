import { Link } from "react-router-dom"
export default function SideBar(props) {
    return(<>
        <ul>
            <li>사이드바 메뉴</li>
            <li><Link to="/">메뉴1 : HOME </Link></li>
            <li><Link to="/create">메뉴2 : CREATE </Link></li>
            <li><Link to="/read">메뉴3 : READ</Link></li>
            <li><Link to="/update">메뉴4 : UPDATE</Link></li>
            <li><Link to="/delete">메뉴5 : DELETE</Link></li>
        </ul>
    </>)
}