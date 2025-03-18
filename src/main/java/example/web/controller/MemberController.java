package example.web.controller;

import example.web.model.dto.MemberDto;
import example.web.model.mapper.MemberMapper;
import example.web.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/member") // 클래스내 http 매핑 주소의 공통 URL 정의 할때 사용.
// -> 개발하는 사람들이 페이지 매핑과 REST 매핑 구분하기 위한 방법
// 1. 페이지 url : -/member/signup
// 2. Rest url :
    // 1. /member/signup.do : 뒤에 do를 붙이는 경우(과거)
    // 2. /apri/member : 앞에 API를 붙이는 경우 (최근) 
@RequiredArgsConstructor // final 멤벼변수에 대해서 생성자를 자동으로 지원한다.
// final 필드에 대해서 자동적으로 생성자를 지원하므로 @Autowired 주입 생략해도 된다
@CrossOrigin("")
public class MemberController {
    private final MemberService memberService;
    // [1] 회원가입
    @PostMapping("/signup")
    public boolean signUp(MemberDto memberDto){ // multipart/form-data 사용시
        System.out.println("MemberController.signUp");
        System.out.println("MemberDto =" + memberDto);
        //return false;
        boolean result = memberService.signUp(memberDto);
        System.out.println("result = " + result);
        return result;
    }
    @PostMapping("/login")
    //  [POST]  http://localhost:8080/api/member/login
    // Content-Type : application/json
    // body : { "mid" : "qwe" , "mpwd":"1234" }
    public boolean login(@RequestBody MemberDto memberDto , HttpServletRequest req ){
        System.out.println("MemberController.login");
        System.out.println("memberDto = " + memberDto);
        MemberDto result = memberService.login( memberDto );
        if( result == null ){ return false;} // 서비스 결과가 null 이면 로그인 실패
        else{  // 서비스 결과가 null 이 아니면 로그인 성공 => 세션에 로그인 성공한 dto 를 저장
            HttpSession session = req.getSession(); // - 세션 호출
            session.setAttribute("loginDto" , result ); // 세션 객체내 새로운 속성 추가 , 로그인성공한 결과를 'loginDto' 라는 이름으로 저장.
            session.setMaxInactiveInterval( 60 * 10 ); // 세션 유지 시간[초] : 60*10 => 10분
            return true; // 로그인 성공처리
        }
    }
    // [3] 로그아웃 + 세션삭제
    @GetMapping("/logout")
    public boolean logout(HttpServletRequest req){
        System.out.println("MemberController.logout");
        HttpSession session = req.getSession(); // 1. 세션 호출
        //session.invalidate(); // 2. 세션내 전체 속성 초기화
        session.removeAttribute("loginDto"); // 3. 세션 내 특정 속성만 초기화
        return true;
    }
    // [4] 로그인 상태 확인, 내정보보기(마이페이지)
    @GetMapping("/info")
    public MemberDto info(HttpServletRequest req){
        HttpSession session = req.getSession(); // 1. session 호출
        if(session == null) return null; // 2. 만약에 session이 존재하지 않으면 null
        Object object = session.getAttribute("loginDto"); // 3. 로그인 성공시 지장한 loginDto의 로그인정보를 꺼낸다
        return (MemberDto)object;
    }
}
