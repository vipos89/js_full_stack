import express from 'express'
import * as trpacExpress from '@trpc/server/adapters/express'
import { trpcRouter } from './trpc'
import cors from 'cors'


const app = express()

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.use(cors())

app.use('/trpc', trpacExpress.createExpressMiddleware({
    router: trpcRouter
}))

app.listen(2999, () => {
    console.log("listening 2999")
})