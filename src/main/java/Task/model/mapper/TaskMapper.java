package Task.model.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface TaskMapper {

    @Insert("INSERT INTO info (username, usernum) VALUES (#{username}, #{usernum})")
    int save(Map<String, String> user);

    @Select("SELECT * FROM info")
    List<Map<String, String>> onFindAll();
}
