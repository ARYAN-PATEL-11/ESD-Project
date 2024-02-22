package com.example.ESD_PROJ_1.exception;

public class StudentNotFoundException extends RuntimeException{
    public StudentNotFoundException(Long id){
        super("Could not found user with id-"+id);
    }
}
