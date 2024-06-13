import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import userRoute from './routes/user.route.js'
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    Credential: true,
  })
);
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev"));

// routes
app.use('/api/v1/user', userRoute)

app.all("*", (req, res) => {
  res.status(404).send("oops ! 404 not found");
});

export { app };
