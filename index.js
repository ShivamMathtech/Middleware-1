const express = require("express");
const { mcbfn1, mcbfn2, mcbfn4, mcbfn3 } = require("./middleare/middleware");
const app = express();
require("dotenv").config();

app.get("/shivam", mcbfn1, mcbfn2, mcbfn3, mcbfn4, (req, res) => {
  res.send(req.query);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`the servr is running in ${PORT}`);
});
