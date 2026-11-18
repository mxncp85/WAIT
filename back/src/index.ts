import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", app: "WAIT!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API WAIT! lancée sur http://localhost:${port}`);
});