import { verifyToken } from "../utils/jwt.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "No token" });

  const user = await verifyToken(token);

  if (!user)
    return res.status(401).json({ message: "Invalid token" });

  req.user = user;
  next();
};