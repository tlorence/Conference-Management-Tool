package com.af.Repositories;

import com.af.Model.WorkShop;
import org.springframework.data.mongodb.core.MongoAction;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WorkShopRepositories extends MongoRepository<WorkShop,String> {}
