package example.day09_task.book.service;

import example.day09_task.book.model.dto.BookDto;
import example.day09_task.book.model.mapper.BookMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired private BookMapper bookMapper;
    private BookDto bookDto;
    public List<BookDto> onFindAll() {
        return bookMapper.onFindAll();
    }
    public BookDto onFindByBno(int bno) {
        return bookMapper.onFindByBno(bno);
    }

    public int onInsert(BookDto bookDto) {
        return bookMapper.onInsert(bookDto);
    }
    public int onUpdate(BookDto bookDto) {
        return bookMapper.onUpdate(bookDto);
    }

    public int onDelete(int bno) {
        return bookMapper.onDelete(bno);
    }
}
