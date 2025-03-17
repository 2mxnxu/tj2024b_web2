package example.web.controller;

import example.web.service.FileService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@RestController
@RequestMapping("api/file")
@RequiredArgsConstructor
public class FileController {
    private final FileService fileService;
    // [1] 업로드
    @PostMapping("/upload")
    public String fileUpload(MultipartFile multipartFile) {
        System.out.println("FileController.fileUpload");
        System.out.println("multipartFile =" + multipartFile);
        String result = fileService.fileUpload(multipartFile);
        return result;
    }
    // [2] 다운로드
    @GetMapping("/download")
    public void fileDownload(@RequestParam String filename, HttpServletResponse response){
        System.out.println("FileController.fileDownload");
        System.out.println("filename =" + filename);
        fileService.fileDownload(filename, response);
    }
    
    // [3] 삭제
    @GetMapping("/delete")
    public void fileDelete(@RequestParam String filename) {
        System.out.println("FileController.fileDelete");
        System.out.println("fileName =" + filename);
        fileService.fileDelete(filename);
    }
}