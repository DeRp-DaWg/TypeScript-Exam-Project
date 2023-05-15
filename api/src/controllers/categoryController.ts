import Category from "../models/categoryModel"
import { Request, Response } from "express";





export const getAllCategories = async (req: Request, res: Response) => {
try {

    const data = await Category.find();

    res.status(200)
        .json({
            status: 'success',
            results: data.length,
            data: {
                data,
            },
        });
} catch(err) {
    //logger.debug('Error: ' + err);
    res.status(400)
        .json({
            status:'fail',
            message: err,
        });
    }
   
};


export const createCategory =  async (req: Request, res: Response) => {
    try {
        
        const newCategory = await Category.create(req.body);

        res.status(201)
            .json({
                status: 'success',
                data: { 
                    category: newCategory
                }
            });
    } catch(err) {
        //logger.debug("Error: " + err)
        res.status(400)
            .json({
                status:'fail',
                message: err,
            });
        }
       
    };

