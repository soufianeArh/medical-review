import express, {Request, Response} from "express";

const router = express.Router();

router.post("/api/hospitals",
      async (req: Request, res: Response) => {
     //add hospital to db
})

export { router as getAllOrderRouter };