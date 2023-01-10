const express = require("express");
const app = express();
const port = process.env.PORT || 3030;
const weatherData = require('./utility/weatherData')

//localhost:3030/weatherinfo?address=Vadodara
app.get("/weatherinfo", (req, res) => {
    const address = req.query.address;
    if (!address) {
        return res.send({
            error: "Please Enter Location or city name"
        });
    };
    weatherData(address, (error, { temperature, description, cityName, humidity, windSpeed, icon }) => {
        if (error) {
            return res.send({
                error
            });
        };
        console.log(temperature, description, cityName, humidity, windSpeed, icon);
        res.send({
            temperature, description, cityName, humidity, windSpeed, icon
        });
    });
});

app.get("*", (req, res) => {
    res.send("This is page not found")
});

app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log(`Server is running on port ${port}`);
});