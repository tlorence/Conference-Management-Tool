package com.af.Service.Impl;


import com.af.Model.WorkShop;
import com.af.Repositories.WorkShopRepositories;
import com.af.Service.WorkShopService;
import com.sun.corba.se.spi.orbutil.threadpool.Work;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkShopServiceImpl implements WorkShopService {
    @Autowired
    WorkShopRepositories workShopRepositories;

    @Override
    public List<WorkShop> getAll() {
        return workShopRepositories.findAll();
    }

    @Override
    public WorkShop add(WorkShop workShop) {
        return workShopRepositories.save(workShop);
    }
}
