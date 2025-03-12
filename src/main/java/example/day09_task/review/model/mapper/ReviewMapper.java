package example.day09_task.review.model.mapper;

import example.day09_task.review.model.dto.ReviewDto;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ReviewMapper {
    @Select("select * from review where bno=#{bno}")
    public List<ReviewDto> onFindBno(int bno);
    @Insert("insert into review (bno, rcontent, rpwd ) values (#{bno}, #{rcontent}, #{rpwd})")
    public int onInsert(ReviewDto reviewDto);
    @Delete("Delete from review where rno = #{rno}")
    public int onDelete(int rno);

}
