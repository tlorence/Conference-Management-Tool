package com.af.Service;

import com.af.Model.WorkShop;
import com.sun.corba.se.spi.orbutil.threadpool.Work;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface WorkShopService {
    List<WorkShop> getAll();
    WorkShop add(WorkShop workShop);


}
