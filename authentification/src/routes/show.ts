import express, {Request, Response} from "express";

const router = express.Router();

router.get("/api/device/:uuid", (req:Request,res:Response)=>{

})

export {router as getDeviceUUID}