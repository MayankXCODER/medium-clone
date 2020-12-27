import express from 'express'
import { createConnection } from 'typeorm';
import { skipPartiallyEmittedExpressions } from 'typescript'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
});

async function start(){

    await createConnection({
        type: 'postgres',
        username: 'postgres',
        password: 'mayank99',
        database: 'conduit',
        entities: [],
        synchronize: true,
        logging: true,
        logger: "advanced-console"
    });

    app.listen(3232, ()=> {
        console.log('Server Started on http://localhost:3232')
    });
}

start()