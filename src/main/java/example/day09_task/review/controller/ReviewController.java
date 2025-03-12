package example.day09_task.review.controller;

import example.day09_task.review.model.dto.ReviewDto;
import example.day09_task.review.service.ReviewService;
import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("task/review")
@CrossOrigin("http://192.168.40.31:5173")

public class ReviewController {
    @Autowired private ReviewService reviewService;
    @GetMapping("")
    public List<ReviewDto> onFindBno(@RequestParam("bno") int bno) {
        return reviewService.onFindBno(bno);
    }
    @PostMapping("")
    public int onInset(@RequestBody ReviewDto reviewDto) {
        return reviewService.onInsert(reviewDto);
    }
    @DeleteMapping("")
    public int onDelete(@RequestParam("rno") int rno) {
        return reviewService.onDelete(rno);
    }
}
