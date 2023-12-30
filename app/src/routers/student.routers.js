import express from 'express';
import { createStudent, deleteStudent, getListStudent, getStudentDetail, updateStudent } from '../controllers/student.controllers.js';

const studentRouters = express.Router();

studentRouters.get("/get-list-student", getListStudent);
studentRouters.get("/get-student-detail/:id", getStudentDetail);
studentRouters.post("/create-student", createStudent);
studentRouters.put("/update-student/:id", updateStudent);
studentRouters.delete("/delete-student/:id", deleteStudent);

export default studentRouters;