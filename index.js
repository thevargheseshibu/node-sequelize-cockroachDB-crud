// index.js
const express = require('express');
const peopleRoutes = require("./routes/people");


const app = express();
const port = 3000;


app.use(express.json());

app.use("/people", peopleRoutes);



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



