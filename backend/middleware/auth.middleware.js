import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers && req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token" });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return res.status(500).json({ message: "Server misconfiguration" });
    }

    const decoded = jwt.verify(token, secret);

    req.user = decoded; // { id, role, email }

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};