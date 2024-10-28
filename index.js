const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});

app.get("/users", (req, res) => {
    const users = [
        { id: 1, ime: "Filipa", prezime: "Bebek" },
        { id: 2, ime: "Boris", prezime: "Vujica" },
        { id: 3, ime: "Pero", prezime: "Pero" }
    ];
    res.json(users);
});

const PORT = 3002;
app.listen(PORT, (error) => {
    if (error) {
        console.log('Greška prilikom pokretanja poslužitelja: ${error.message}');
    } else {
        console.log('Server je pokrenut na http://localhost:${PORT}');
    }
});
