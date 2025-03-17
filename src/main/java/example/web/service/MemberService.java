package example.web.service;

import example.web.model.dto.MemberDto;
import example.web.model.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberMapper memberMapper;
    public boolean signUp(MemberDto memberDto) {
        System.out.println("MemberService.signUp");
        System.out.println("memberDto =" + memberDto);
        //return false;
        boolean result = memberMapper.signUp(memberDto);
        System.out.println("result = " + result);
        return result;
    }
    // [2] 로그인
    public MemberDto login( MemberDto memberDto ){
        System.out.println("MemberService.login");
        System.out.println("memberDto = " + memberDto);
        //return false;
        MemberDto result = memberMapper.login( memberDto );
        return result;
    }
}