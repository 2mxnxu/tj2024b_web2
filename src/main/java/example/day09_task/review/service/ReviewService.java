package example.day09_task.review.service;

import example.day09_task.review.model.dto.ReviewDto;
import example.day09_task.review.model.mapper.ReviewMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    @Autowired private ReviewMapper reviewMapper;
    private ReviewDto reviewDto;
    public int onInsert(ReviewDto reviewDto) {
        return reviewMapper.onInsert(reviewDto);
    }
    public List<ReviewDto> onFindBno(int bno) {
        return reviewMapper.onFindBno(bno);}
    public int onDelete(int bno) {
        return reviewMapper.onDelete(bno);
    }
}
