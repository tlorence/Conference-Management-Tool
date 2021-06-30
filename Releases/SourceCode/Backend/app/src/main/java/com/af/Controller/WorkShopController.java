package com.af.Controller;

import com.af.Model.WorkShop;
import com.af.Service.WorkShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/workshops")
public class WorkShopController {

    @Autowired
    WorkShopService workShopService;

    @PostMapping("/addWorkshops")
    public WorkShop addWorkshops(@RequestBody WorkShop workShop){
        return workShopService.add(workShop);
    }

    @GetMapping("/getAllWorkShops")
    public List<WorkShop> getAllWorkshops(){
        return workShopService.getAll();
    }
}
