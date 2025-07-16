import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1", userRoutes);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`server runnig on port ${PORT}`));
