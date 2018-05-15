import { Request, Response, Router } from "express";


import courseRoutes from "./courses";
import studentRoutes from "./students";
import subjectRoutes from "./subjects";
import teacherRoutes from "./teachers";
import batchRoutes from "./batches";

const route: Router = Router();

let routes = {
 
  courses: courseRoutes,
  students: studentRoutes,
  subjects: subjectRoutes,
  teachers: teacherRoutes,
  batches:batchRoutes
};

route.use("/courses", routes.courses);
route.use("/teachers", routes.teachers);
route.use("/students", routes.students);
route.use("/subjects", routes.subjects);
route.use("/batches", routes.batches);

export default route;
