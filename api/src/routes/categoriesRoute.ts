
//import express = require('express');
import express from 'express';
import { createCategory, getAllCategories } from '../controllers/categoryController';

const router = express.Router();

router.route("/").get(getAllCategories).post(createCategory);



export default router;

