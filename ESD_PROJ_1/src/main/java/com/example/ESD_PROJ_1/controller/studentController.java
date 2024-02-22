package com.example.ESD_PROJ_1.controller;
import com.example.ESD_PROJ_1.exception.StudentNotFoundException;
import com.example.ESD_PROJ_1.repository.studentRepository;
import com.example.ESD_PROJ_1.model.student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class studentController {

    @Autowired
    private studentRepository StudentRepository;

    @PostMapping("/student_path")
    student newStudent(@RequestBody student newStudent){
        return StudentRepository.save(newStudent);
    }

    @GetMapping("/student_path_get")
    List<student> getallstudents(){
        return StudentRepository.findAll();
    }

    @GetMapping("/student_path/{id}")
    student getstudentById(@PathVariable Long id){
        return StudentRepository.findById(id)
                .orElseThrow(()->new StudentNotFoundException(id));

    }

    @GetMapping("/api/student/{id}") // Updated endpoint for checking if a student exists with id
    public ResponseEntity<student> getStudentById(@PathVariable Long id) {
        Optional<student> student = StudentRepository.findById(id);
        return student.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }


    @GetMapping("/api/student/{id}/{firstName}") // Updated endpoint for checking if a student exists with id and fname
    public ResponseEntity<student> getStudentByIdAndFirstName(
            @PathVariable Long id, @PathVariable String firstName) {
        Optional<student> student = StudentRepository.findById(id);
        if (student.isPresent() && student.get().getFirstname().equals(firstName)) {
            return ResponseEntity.ok(student.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PutMapping("/student_path/{id}")
    student updatestudent(@RequestBody student newStudent,@PathVariable long id,@RequestParam(value="file", required = false) MultipartFile file){
        return (student) StudentRepository.findById(id)
                .map(student -> {

                    student.setRoll_no(newStudent.getRoll_no());
                    student.setFirstname(newStudent.getFirstname());
                    student.setLastname(newStudent.getLastname());
                    student.setEmail(newStudent.getEmail());
                    student.setCgpa(newStudent.getCgpa());
                    student.setPhotograph_path(newStudent.getPhotograph_path());
                    student.setTotal_credits(newStudent.getTotal_credits());
                    student.setDomain_id(newStudent.getDomain_id());
                    student.setSpecialization_id(newStudent.getSpecialization_id());
                    student.setPlacement_id(newStudent.getPlacement_id());

                    return StudentRepository.save(student);
                }).orElseThrow(()->new StudentNotFoundException(id));
    }
}
