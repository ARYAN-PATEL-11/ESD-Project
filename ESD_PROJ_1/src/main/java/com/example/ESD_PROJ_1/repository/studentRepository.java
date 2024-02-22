package com.example.ESD_PROJ_1.repository;
import com.example.ESD_PROJ_1.model.student ;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface studentRepository extends JpaRepository<student,Long> {
}
