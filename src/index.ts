import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv'
import { router } from './routes/routes';
import { RabbitmqService } from './services/RabbitmqService';
dotenv.config({ path: __dirname + './env' })

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(router)

app.listen(3000, async () => {
    console.log('rodando na 3000!')

    const server = new RabbitmqService('amqp://admin:123456@rabbitmq:5672');
    await server.start();
    server.consume('test', (message) => console.log('Message Consumed:', message?.content.toString()))
})
