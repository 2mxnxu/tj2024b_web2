package example.day07.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/day07/react") // 공동 URL
@CrossOrigin("http://localhost:5173") // CORS 정책 허용, 특정 url만 허용 가능하도록 한다
//@CrossOrigin("http://192.168.40.31:5173") // CORS 정책 허용, 특정 url만 허용 가능하도록 한다

public class ReactController {
    // [1] post
    @RequestMapping("")
    public boolean onPost(@RequestBody Map<String, Object> map) {
        System.out.println("React Controller onPost");
        System.out.println("map" + map);
        return true;
    }

}
