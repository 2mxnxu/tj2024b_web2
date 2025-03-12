import { Link } from "react-router-dom"
export default function SideBar(props) {
    return(<>
        <ul>
            <li>사이드바 메뉴</li>
            <li><Link to="/create">책 소개 등록 </Link></li>
            <li><Link to="/read">책 소개 출력</Link></li>
            <li><Link to="/reviewr">리뷰 등록</Link></li>
            <li><Link to="/reviewv">리뷰 조회</Link></li>
        </ul>
    </>)
}