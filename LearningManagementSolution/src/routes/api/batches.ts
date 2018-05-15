import { Request, Response, Router } from "express";
import { Batch,TeacherBatch,StudentBatch} from "../../db";

import { BatchModel } from "../../models/Batch";
import Sequelize from 'sequelize'
const route: Router = Router();

const Op = Sequelize.Op

route.get("/", (req: Request, res: Response) => {
 
    Batch.findAll()
      .then((batches: BatchModel[]) => {
        res.status(200).send(batches);
      })
      .catch((error: Error) => {
        res.status(500).send({
          error: "Could not retrieve batches"
        });
      });
 });


  route.get("/upcoming", (req: Request, res: Response) => {
    
      Batch.findAll({
          where:{
              startDate:{
                [Op.gt]: new Date()
              }
          }
      })
        .then((batches: BatchModel[]) => {
          res.status(200).send(batches);
        })
        .catch((error: Error) => {
          res.status(500).send({
            error: "Could not retrieve batches"
          });
        });
    });
    export default route;

