const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        console.log('Greška prilikom pokretanja poslužitelja: ${error.message}');
    } else {
        console.log('Server je pokrenut na http://localhost:${PORT}');
    }
});
