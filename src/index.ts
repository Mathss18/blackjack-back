import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname + './env' })

const app = express();

let status = 200;

app.get('/', (req, res) => {
    res.status(200).json({ data: process.env.HOSTNAME })
})

app.get('/health', (req, res) => {
    console.log('Testando')
    let now = Date.now();
    // for (let i = 0; i < 4000000000; i++) {

    // }
    let then = Date.now()
    console.log('Tempo', status, (then - now))
    res.status(status).json({ data: process.env.HOSTNAME })

})

app.listen(3000, () => {
    console.log('rodando na 3000!')
})
