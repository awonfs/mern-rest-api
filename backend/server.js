const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const port = process.env.PORT || 5000;
const connectDb = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDb();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
