//display a specific hospital
import express, {Response, Request} from "express";

const router= express.Router();

router.get("/api/hospital/:id", async (req:Request, res:Response)=>{
      
})

export {router as showHospitalRouter}