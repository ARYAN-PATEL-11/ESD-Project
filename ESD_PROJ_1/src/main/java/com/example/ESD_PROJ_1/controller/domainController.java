package com.example.ESD_PROJ_1.controller;
import com.example.ESD_PROJ_1.repository.domainRepository;
import com.example.ESD_PROJ_1.model.domain;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class domainController {

    @Autowired
    private domainRepository DomainRepository;

    @PostMapping("/domain_path")
    domain newDomain(@RequestBody domain newDomain){
        return DomainRepository.save(newDomain);
    }
    @GetMapping("/domain_path_get")
    List<domain> getalldomains(){
        return DomainRepository.findAll();
    }
}
