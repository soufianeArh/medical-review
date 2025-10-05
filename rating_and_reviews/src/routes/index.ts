import express, {Request, Response} from "express";
import { requireAuth } from "@soufiane12345/ticketing-common";
import { body } from "express-validator";
import {ReviewRating} from "../models/review-rating"

const router=express.Router();

router.get("/api/rating",
      requireAuth,
      [
            body("hospital_id").isString().notEmpty()    .withMessage("hospital_id must be a string"),
            body("device_uuid").isUUID().notEmpty().withMessage("device_uuid must be a valid UUID"),
            body("rating").isNumeric().notEmpty().withMessage("rating must be a number"),
            body("review").optional().isString().withMessage("review must be a string")
      ],
       async (req: Request, res:Response)=>{
      //create a rating (review optional)
      

})

export {router as showAggregate}