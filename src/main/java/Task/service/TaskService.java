package Task.service;

import Task.model.mapper.TaskMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service  // 서비스 클래스에 @Service 어노테이션 추가
public class TaskService {
    @Autowired
    private TaskMapper taskMapper;

    public int save(Map<String, String> user) {
        System.out.println("map = " + user);
        return taskMapper.save(user);
    }

    public List<Map<String, String>> onFindAll() {
        return taskMapper.onFindAll();
    }
}
