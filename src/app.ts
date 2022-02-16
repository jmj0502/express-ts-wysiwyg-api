import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
import express from "express";
import "./controllers/post.controller";
import "./controllers/user.controller";
import { router } from "./decorators/controller";

const app: express.Application = express();
const applicationPort = 4000;
app.set('port', applicationPort);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);

export default app;
