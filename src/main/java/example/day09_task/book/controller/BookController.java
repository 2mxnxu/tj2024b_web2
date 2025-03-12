package example.day09_task.book.controller;

import example.day09_task.book.model.dto.BookDto;
import example.day09_task.book.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("task/book")
@CrossOrigin("http://192.168.40.31:5173")
public class BookController {
    @Autowired private BookService bookService;
    @GetMapping("")
    public List<BookDto> onFindAll() {
        return bookService.onFindAll();
    }
    @PostMapping("")
    public int onSave(@RequestBody BookDto bookDto) {
        return bookService.onInsert(bookDto);
    }
    @PutMapping("")
    public int onUpdate(@RequestParam int bno, @RequestBody BookDto bookDto) {
        bookDto.setBno(bno);
        return bookService.onUpdate(bookDto);
    }

    @DeleteMapping("")
    public int onDelete(@RequestParam("bno") int bno) {
        return bookService.onDelete(bno);

    }
    @GetMapping("/view")
    public BookDto onFindById(@RequestParam("bno") int bno) {
        return bookService.onFindByBno(bno);
    }
}
