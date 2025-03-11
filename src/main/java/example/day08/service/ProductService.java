package example.day08.service;

import example.day08.model.dto.ProductDto;
import example.day08.model.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired private ProductMapper productMapper;
    private ProductDto productDto;

    public List<ProductDto> onRead(){
        System.out.println("ProductService.onRead()");
        return productMapper.onRead();
    }
    public int onWrite(ProductDto productDto){
        System.out.println("ProductService.onWrite()");
        return productMapper.onWrite(productDto);
    }
    public int onUpdate(ProductDto productDto){
        System.out.println("ProductService.onUpdate()");
        return productMapper.onUpdate(productDto);
    }
    public int onDelete(int id){
        System.out.println("ProductService.onDelete()");
        return productMapper.onDelete(id);
    }
}
