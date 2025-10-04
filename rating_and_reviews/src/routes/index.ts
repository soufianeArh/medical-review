import express, {Request, Response} from "express";

const router=express.Router();

router.get("/api/rating", async (req: Request, res:Response)=>{
//create a rating (review optional)
})

export {router as showAggregate}