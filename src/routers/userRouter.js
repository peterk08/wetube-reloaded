import express from "express";
import {getEdit, postEdit, logout, see, startGithubLogin, finishGithubLogin, getChangePassword, postChangePassword} from "../controllers/userController";
import { get } from "mongoose";
import {
    avatarUpload,
    protectorMiddleware,
    publicOnlyMiddleware,
  } from "../middlewares";


const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(avatarUpload.single("avatar"), postEdit);
userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(avatarUpload.single("avatar"), postEdit);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get("/:id", see)


export default userRouter;

