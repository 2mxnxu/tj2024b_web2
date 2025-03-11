package example.day08.controller;

import example.day08.model.dto.ProductDto;
import example.day08.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // 스프링 빈 등록
@RequestMapping("/day08/products")
@CrossOrigin("http://192.168.40.31:5173")
public class ProductController {
    @Autowired private ProductService productService;
    @GetMapping("")
    public List<ProductDto> onRead(){
        System.out.println("ProductController.onRead");
        return productService.onRead();
    }
    @PostMapping("")
    public int onWrite(@RequestBody ProductDto productDto){
        System.out.println("ProductController.onSave");
        return productService.onWrite(productDto);
    }
    @PutMapping("")
    public int onUpdate(@RequestBody ProductDto productDto){
        System.out.println("ProductController.onUpdate");
        return productService.onUpdate(productDto);
    }
    @DeleteMapping("")
    public int onDelete(@RequestParam("id") int id){
        System.out.println("ProductController.onDelete");
        return productService.onDelete(id);
    }

}
