import express from 'express';
import studentRouters from './student.routers.js';

const rootRouters = express.Router();

rootRouters.use("/student", studentRouters);

export default rootRouters;