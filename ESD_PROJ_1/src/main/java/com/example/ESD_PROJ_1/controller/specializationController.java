package com.example.ESD_PROJ_1.controller;
import com.example.ESD_PROJ_1.model.student;
import com.example.ESD_PROJ_1.repository.specializationRepository;
import com.example.ESD_PROJ_1.model.specialization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class specializationController {

    @Autowired
    private specializationRepository SpecializationRepository;

    @PostMapping("/specialization_path")
    specialization newSpecialization(@RequestBody specialization newSpecialization){
        return SpecializationRepository.save(newSpecialization);
    }
    @GetMapping("/specialization_path_get")
    List<specialization> getallspecializations(){
        return SpecializationRepository.findAll();
    }
}
