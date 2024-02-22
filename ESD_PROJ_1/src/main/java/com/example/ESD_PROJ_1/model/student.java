package com.example.ESD_PROJ_1.model;
import jakarta.persistence.*;
@Entity
@Table(name = "student")
public class student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private Long student_id;

    @Column(name = "roll_no", unique = true, nullable = false)
    private String roll_no;

    @Column(name = "first_name")
    private String firstname;

    @Column(name = "last_name")
    private String lastname;

    @Column(name = "email")
    private String email;

    @Column(name = "photograph")
    private String photograph_path;

    @Column(name = "cgpa")
    private double cgpa;

    @Column(name = "total_credits")
    private int total_credits;

    @ManyToOne
    @JoinColumn(name = "domain_id")
    private domain domain_id;

    @ManyToOne
    @JoinColumn(name = "specialization_id")
    private specialization specialization_id;


    @Column(name = "placement_id")
    private int placement_id;

    public Long getStudent_id() {
        return student_id;
    }

    public void setStudent_id(Long student_id) {
        this.student_id = student_id;
    }

    public String getRoll_no() {
        return roll_no;
    }

    public void setRoll_no(String roll_no) {
        this.roll_no = roll_no;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhotograph_path() {
        return photograph_path;
    }

    public void setPhotograph_path(String photograph_path) {
        this.photograph_path = photograph_path;
    }

    public double getCgpa() {
        return cgpa;
    }

    public void setCgpa(double cgpa) {
        this.cgpa = cgpa;
    }

    public int getTotal_credits() {
        return total_credits;
    }

    public void setTotal_credits(int total_credits) {
        this.total_credits = total_credits;
    }

    public domain getDomain_id() {
        return domain_id;
    }

    public void setDomain_id(domain domain_id) {
        this.domain_id = domain_id;
    }

    public specialization getSpecialization_id() {
        return specialization_id;
    }

    public void setSpecialization_id(specialization specialization_id) {
        this.specialization_id = specialization_id;
    }

    public int getPlacement_id()
    {
        return placement_id;
    }


    public void setPlacement_id(int placement_id)
     {
        this.placement_id = placement_id;
    }


















































































    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        student otherStudent = (student) o;

        // Compare only the firstname field
        return firstname != null ? firstname.equals(otherStudent.firstname) : otherStudent.firstname == null;
    }

    @Override
    public int hashCode() {
        return firstname != null ? firstname.hashCode() : 0;
    }



}
