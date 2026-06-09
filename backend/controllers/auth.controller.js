import User from "../models/User.js";
import { createToken } from "../utils/jwt.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(404).json({ message: "User not found" });

  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match)
    return res.status(400).json({ message: "Invalid password" });

  const token = await createToken({
    id: user._id,
    email: user.email,
    role: user.role,
  });

  res.json({
    token,
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
    },
  });
};