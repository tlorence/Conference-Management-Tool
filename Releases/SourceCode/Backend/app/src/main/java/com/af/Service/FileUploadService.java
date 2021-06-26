package com.af.Service;

import com.af.Model.FileUpload;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;
import java.util.Optional;

@Service
@Transactional
public interface FileUploadService {

    FileUpload uploadFile(MultipartFile file);

    Optional<FileUpload> getFile(String fileId);
}
