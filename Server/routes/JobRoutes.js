import express from 'express';
const router = express.Router();
import { createJob, Getjobs } from '../contollers/JobController.js';

router.get('/', Getjobs);     
router.post('/', createJob);  

export default router;
