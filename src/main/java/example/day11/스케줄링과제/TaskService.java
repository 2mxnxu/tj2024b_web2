package example.day11.스케줄링과제;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskMapper taskMapper;

    @Scheduled(fixedRate = 30000)
    public void task1() {
        System.out.println("모든 제품의 재고는 3개씩 감소");
        taskMapper.task1();
    }

    @Scheduled(fixedRate = 60000)
    public void task2() {
        System.out.println("모든 제품 정보를 조회하여 console 출력");
        List<HashMap<String, String>> list = taskMapper.task2();

        for (HashMap<String, String> product : list) {
            System.out.println(product);
        }
    }
    @Scheduled(fixedRate = 300000)
    public void task3() {
        boolean result = taskMapper.task3();
        if( result ) {
            System.out.println("재고가 10 이하인 상품의 재고 20개 추가");
        }else{
            System.out.println("task3 실패"); }
    }
}
