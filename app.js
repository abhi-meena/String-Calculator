import bodyParser from "body-parser";
import express from "express";
import stringCalculatorRoutes from "./routes/StringCalculatorRoutes.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/api/calculate", stringCalculatorRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
