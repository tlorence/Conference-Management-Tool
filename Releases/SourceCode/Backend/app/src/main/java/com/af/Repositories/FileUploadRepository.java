package com.af.Repositories;


import com.af.Model.FileUpload;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FileUploadRepository extends MongoRepository<FileUpload, String> {
}
