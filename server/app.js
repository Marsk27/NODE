console.log("hello from mars");
// we have to create the server and mapping the end points.

// we have to work with require function : it will help us to load the file / module.

const express = require("express");
// we have loaded the express module.

const app = express();

// define the routes
app.use("/api/users",require("./routes/api/users"));
app.use("/api/profile",require("./routes/api/profile"));
app.use("/api/auth",require("./routes/api/auth"));
app.use("/api/posts",require("./routes/api/posts"));

// express () is a function that will provide us the express application/ server
// this expres
// port :will have unique numbers but used to exchange the data over the network or internet.
// we have to use the port as per the emviroment variable.
// use port

const port = process.env.PORT || 5005;

app.listen(5005, () => {
    console.log(`server is running on port ${5005}`);
});





