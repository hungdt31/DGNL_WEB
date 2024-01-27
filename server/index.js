const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 7777;
// config the address can access to server
app.use(
    cors({
        origin: process.env.CLIENT_URL,
    })
);
// use to read json type from client convert to suitable data type
// ex: json object -> JS object, string, array
app.use(express.json());
// use to read method: "GET", "POST", ...
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use("/", (req, res) => res.send("SERVER ONNNNN"));
app.listen(PORT, () => console.log("----- SERVER READY ON " + PORT + " -----"));
