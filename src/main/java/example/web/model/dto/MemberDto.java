package example.web.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
}
