import { Router } from "express";
import { signin, signup } from "../controllers/user";

const route = Router().post("/signin", signin).post("/signup", signup);

export default route;
