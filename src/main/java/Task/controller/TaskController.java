package Task.controller;

import Task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/task/num")
@CrossOrigin("http://192.168.40.31:5173")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("")
    public boolean onPost(@RequestBody Map<String, String> user) {
        System.out.println("user = " + user);
        taskService.save(user);
        return true;
    }

    @GetMapping("")
    public List<Map<String, String>> onFindAll() {
        return taskService.onFindAll();
    }
}
