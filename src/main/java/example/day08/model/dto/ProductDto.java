package example.day08.model.dto;
import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    int id;
    String name;
    int price;
    String comment;
}
