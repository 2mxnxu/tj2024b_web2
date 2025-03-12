package example.day09_task.review.model.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDto {
    private int rno;
    private int bno;
    private String rcontent;
    private String rpwd;
}
