package com.example.ESD_PROJ_1.model;
import jakarta.persistence.*;
@Entity
@Table(name = "domain")
public class domain {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "domain_id")
        private Long domain_id;

        @Column(name = "program", nullable = false)
        private String program;

        @Column(name = "batch", nullable = false)
        private int batch;

        @Column(name = "capacity", nullable = false)
        private int capacity;

        @Column(name = "qualification")
        private String qualification;

        public Long getDomain_id() {
                return domain_id;
        }

        public void setDomain_id(Long domain_id) {
                this.domain_id = domain_id;
        }

        public String getProgram() {
                return program;
        }

        public void setProgram(String program) {
                this.program = program;
        }

        public int getBatch() {
                return batch;
        }

        public void setBatch(int batch) {
                this.batch = batch;
        }

        public int getCapacity() {
                return capacity;
        }

        public void setCapacity(int capacity) {
                this.capacity = capacity;
        }

        public String getQualification() {
                return qualification;
        }

        public void setQualification(String qualification) {
                this.qualification = qualification;
        }
}

