import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/user";

dotenv.config();

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.findOne({ email }).exec();
    if (!userExist) return res.status(401).json({ message: "User not found" });
    const isCorrect = await bcrypt.compareSync(password, userExist.password);
    if (!isCorrect)
      return res.status(401).json({ message: "Incorrect credentials" });
    const token = jwt.sign(
      { email: userExist.email, id: userExist._id },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({ result: userExist, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword } = req.body;
  try {
    const userExist = await User.findOne({ email }).exec();
    if (userExist)
      return res.status(401).json({ message: "User already exist" });
    if (password !== confirmPassword)
      return res.status(401).json({ message: "Passwords don't match" });
    const hsPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hsPassword,
      name: `${firstName} ${lastName}`,
    }).exec();
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.SECRET_KEY
    );
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
