package com.af.Controller;

import com.af.Model.FileUpload;
import com.af.Service.FileUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin
@RequestMapping("/files")
public class FileUploadController {

    @Autowired
    FileUploadService fileUploadService;

//    Upload
    @PostMapping("/uploadFile")
    public String uploadFile(@RequestParam("files") MultipartFile[] files) {
        for(MultipartFile file: files) {
            fileUploadService.uploadFile(file);
        }
        return "Successfully uploaded";
    }
//    Download
    @GetMapping("/downloadFile/{fileId}")
    public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable String fileId) {
        FileUpload fileUpload = fileUploadService.getFile(fileId).get();
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(fileUpload.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment: filename=\" "+ fileUpload.getFileName()+ "\"")
                .body(new ByteArrayResource(fileUpload.getData()));
    }

}
