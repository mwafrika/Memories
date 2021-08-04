import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const { SECRET_KEY } = process.env;

const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send({ message: "Token is required" });
    }

    const token = authorization.split(" ")[1];
    const isCutomAuth = token.length < 500;
    let decodedData;

    if (token && isCutomAuth) {
      decodedData = jwt.verify(token, SECRET_KEY);
      req.userId = decodedData.id;
      console.log(req.userId, "mwaffffrika");
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
export default auth;
