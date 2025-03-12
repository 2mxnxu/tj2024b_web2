package example.day09_task.book.model.mapper;

import example.day09_task.book.model.dto.BookDto;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface BookMapper {
    @Select("select * from book")
    public List<BookDto> onFindAll();
    @Select("select * from book where bno = #{bno}")
    public BookDto onFindByBno(int bno);
    @Insert("insert into book (bname, bauthor, bintro, bpwd) values (#{bname}, #{bauthor}, #{bintro}, #{bpwd})")
    public int onInsert(BookDto bookDto);
    @Update("update book set bname = #{bname}, bauthor = #{bauthor}, bintro = #{bintro} WHERE bno = #{bno}")
    public int onUpdate(BookDto bookDto);
    @Delete("Delete from Book where bno = #{bno}")
    public int onDelete(int bno);
}
