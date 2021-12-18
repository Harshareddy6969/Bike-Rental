const express = require("express");
const Router = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = 7777;

const mainRouter = Router();

app.use(express.json());
app.use(cors());

mainRouter.use("/api/bike", require("./routes/bike"));
mainRouter.use("/api/rented-bike", require("./routes/rent-bike"));
mainRouter.use("/api/bike-type", require("./routes/bike-type"));

app.use("/", mainRouter);
// if (process.env.NODE_ENV === "production") {
//   app.use("/bike-rental/", mainRouter);
// } else {
//   app.use("/", mainRouter);
// }
app.listen(PORT, () => {
  console.log(`Server has been started at *:${PORT}`);
});
