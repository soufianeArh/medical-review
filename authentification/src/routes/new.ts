import express, {Request, Response} from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.post("/api/device",
      async (req:Request,res:Response)=>{
      const deviceId = uuidv4();
      res.status(200).send({uuid:deviceId})

})

export {router as createDeviceUUID}