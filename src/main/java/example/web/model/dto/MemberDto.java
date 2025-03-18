package example.web.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberDto {
    private int mno;
    private String mid;
    private String mpwd;
    private String mname;
    private String mimg;
    // + 그외
    private MultipartFile uploadfile; // [FORM 전송] 등록시 업로드 된 파일의 바이트 인터페이스
}
