package com.af.Service.Impl;

import com.af.Model.FileUpload;
import com.af.Repositories.FileUploadRepository;
import com.af.Service.FileUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class FileUploadServiceImpl implements FileUploadService {

    @Autowired
    private FileUploadRepository fileUploadRepository;

//Uploading a File
    @Override
    public FileUpload uploadFile(MultipartFile file) {
        String fileName = file.getOriginalFilename();
        try{
            FileUpload fileUpload = new FileUpload(fileName, file.getContentType(), file.getBytes());
            return fileUploadRepository.save(fileUpload);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

//    Viewing a file

    public Optional<FileUpload> getFile(String fileId) {
        return fileUploadRepository.findById(fileId);
    }

//    View all files
    public List<FileUpload> getFiles() {
        return fileUploadRepository.findAll();
    }
}
