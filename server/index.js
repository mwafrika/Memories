import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/posts";
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://mwafrika:josmwafrika789@cluster0.yyg5k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/posts", router);
mongoose.set("useFindAndModify", false);
