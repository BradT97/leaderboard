import express = require('express');
import bodyParser from 'body-parser';
import { router } from './routes';
import { Server } from 'http';

require('dotenv').config();

const PORT: number = parseInt(process.env.PORT) || 8080;
const app: express.Application = express();

app.use(bodyParser.json());
app.use(router);

const server: Server = app.listen(PORT, () => {
    console.log(`Successful startup. Running on port ${PORT}`);
});

function handleShutdown() : void {
    console.log('Executing shutdown procedure.');
    server.close((err: Error) => {
        if (err) console.log('Error terminating the server');
        else console.log('Server successfully terminated. Goodbye!');
    });
    process.exit(0);
}

process.on('SIGINT', () => handleShutdown());
process.on('SIGTERM', () => handleShutdown());