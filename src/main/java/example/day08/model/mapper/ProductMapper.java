package example.day08.model.mapper;

import example.day08.model.dto.ProductDto;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ProductMapper {
    @Select("select * from productsample")
    public List<ProductDto> onRead();
    @Insert("Insert INTO productsample (id, name, price, comment) VALUES (#{id}, #{name}, #{price}, #{comment})")
    public int onWrite(ProductDto productDto);
    @Update("Update productsample SET name = #{name}, price = #{price}, comment = #{comment} WHERE id = #{id}")
    public int onUpdate(ProductDto productDto);
    @Delete("Delete from productsample WHERE id = #{id}")
    public int onDelete(int id);
}
