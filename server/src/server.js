const express = require("express");
const app = express();
const predict = require("./routes/predictRoute");

require("dotenv").config();
//database connection
const dbConnect = require("./configuration/database");
dbConnect();

app.use(express.json());
app.use('/campusnavigator/v1',predict);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
