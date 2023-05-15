const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://0.0.0.0:27017/todos",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database Connection successfull");
  })
  .catch((e) => {
    console.log(`Database Connection failed  : ${e}`);
  });
