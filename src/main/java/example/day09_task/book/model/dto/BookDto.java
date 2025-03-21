package example.day09_task.book.model.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {
    int bno;
    String bname;
    String bauthor;
    String bintro;
    String bpwd;
}
