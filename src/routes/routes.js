import express from 'express'
import { RabbitmqService } from '../services/RabbitmqService'

export const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ data: process.env.HOSTNAME })
})

router.get('/health', (req, res) => {
    let now = Date.now()
    let then = Date.now()
    console.log('Health Response Time:', status, (then - now))
    res.status(200).json({ data: process.env.HOSTNAME })
})

router.post('/message', async (req, res) => {
    const { message } = req.body
    const server = new RabbitmqService('amqp://admin:123456@rabbitmq:5672');
    await server.start();
    await server.publishInQueue('test', message)
    await server.publishInExchange('amq.direct', 'rota', message)
    res.status(200).json({ data: 'sucesso!' })
})
