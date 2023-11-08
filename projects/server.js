const express = require('express');
const app = express();
const port = 3000;

let qrCodeCount = 0;

app.use(express.json());

app.get('/get-count', (req, res) => {
    res.json({ count: qrCodeCount });
});

app.post('/increment-count', (req, res) => {
    qrCodeCount++;
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
