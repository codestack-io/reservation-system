import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getMe } from "../controllers/auth.controller.js";
import {
  register,
  login,
  googleLogin,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google", googleLogin);
router.get("/me", authMiddleware, getMe);

export default router;