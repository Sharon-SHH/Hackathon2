require("dotenv").config();
// const axios = require("axios");
const express = require("express");


const app = express();
const cors = require("cors");
const got = require("got"); // if you don't have "got" - install it with "npm install got"

const apiKey = "acc_fffbff1d9c6a505";
const apiSecret = "f9b8745ab46b564e82c57aacac1e83dc";

const imageUrl =
  "https://imagga.com/static/images/tagging/wind-farm-538576_640.jpg";
const url =
  "https://api.imagga.com/v2/colors?image_url=" + encodeURIComponent(imageUrl);

const PORT = 5001 || 8081;

app.use(cors());
const fetch = async (url) => {
    try {
        const response = await got(url, {
        username: apiKey,
        password: apiSecret,
        });
        return response.body;
    } catch (error) {
        console.log(error.response.body);
    }
};
app.use("/colors", async (req, res) => {
   
    const url =
      "https://api.imagga.com/v2/colors?image_url=" +
      encodeURIComponent(req.query.url);
    console.log(req.query.url);
    const outPut = await fetch(url);
    const colorAPI = JSON.parse(outPut);
    console.log(`${colorAPI.result.colors.background_colors}`);

    res.json(colorAPI);
});

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
