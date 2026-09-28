import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware to parse incoming JSON request bodies
app.use(express.json());
// Health check / welcome endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Node.js API!'
    });
});
// SMTP2GO webhook endpoint
app.post('/webhooks/smtp2go', (req, res) => {
    console.log('SMTP2GO webhook received:');
    console.log(JSON.stringify(req.body, null, 2));
    // TODO: Process/store the webhook data here
    res.status(200).json({
        message: 'Data received!',
        data: req.body
    });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// import {Application, Request, Response} from 'express';
// const express = require('express');
//
// const app = express();
// const PORT:number = 3000;
// // const app = express();
// // const PORT = process.env.PORT || 3000;
//
// // Parse JSON webhook payloads
// app.use(express.json());
//
// // SMTP2GO webhook endpoint
// app.post("/webhooks/smtp2go", (req: Request, res: Response) => {
//     console.log("SMTP2GO webhook received:");
//     console.log(JSON.stringify(req.body, null, 2));
//
//     // TODO: Process/store the webhook data here
//
//     res.status(200).json({
//         success: true,
//     });
// });
//
// app.listen(PORT, () => {
//     console.log(`SMTP2GO webhook server running on port ${PORT}`);
// });
