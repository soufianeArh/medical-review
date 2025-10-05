import express, {Request, Response} from "express";
import { BadRequestError, requireAuth } from "@soufiane12345/ticketing-common";
import {body} from "express-validator";
import { ReviewRating } from "../models/review-rating";

const router=express.Router();

router.post("/api/rating",
      requireAuth,
      [
            body("hospital_id").isString().notEmpty()    .withMessage("hospital_id must be a string"),
            body("device_uuid").isUUID().notEmpty().withMessage("device_uuid must be a valid UUID"),
            body("rating").isNumeric().notEmpty().withMessage("rating must be a number"),
            body("review").optional().isString().withMessage("review must be a string")
      ], async (req: Request, res:Response)=>{
            //check if id uuid already have already a rating
            const uuidExists = await ReviewRating.findOne({
                  device_uuid:req.body.device_uuid
            })
            if(uuidExists){
                  throw new BadRequestError("device already ranked")
            }
            const ticket = ReviewRating.build({
                  hospital_id: req.body.hospital_id,
                  device_uuid: req.body.device_uuid,
                  rating: req.body.rating
            })
            await ticket.save();
//create a rating (review optional)
})

export {router as createNewRate}