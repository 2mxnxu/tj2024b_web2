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
    private final FileService fileService;
    public boolean signUp(MemberDto memberDto) {
        System.out.println("MemberService.signUp");
        System.out.println("memberDto =" + memberDto);
            // (1) 만약에 첨부파일(프로필 업로드) 존재하는지 검사
        try {
            // (1) 만약에 첨부파일(프로필업로드)이 존재하는지 검사.
            if (memberDto.getUploadfile() == null) {
            } // 업로드가 존재하지 않으면
            else { // 업로드가 존재하면 파일서비스의 업로드 메소드 사용하기.
                // (2) 파일서비스내 업로드 함수 이용하여 첨부파일 업로드하고 파일명 받기.
                String filename = fileService.fileUpload(memberDto.getUploadfile());
                // (3) 업로드된 파일명을 dto 저장
                memberDto.setMimg(filename);
            }
            boolean result = memberMapper.signUp(memberDto);
            System.out.println("result = " + result);
            return result;
        }catch ( Exception e ){ return false; } // 업로드 와 회원가입DB 처리 중 예외 발생시 false 반환
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