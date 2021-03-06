import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));

import { auth, item } from './routes'

app.post('/signin', auth.signin)
app.post('/signup', auth.signup)


app.post('/searchItem', item.search)
app.post('/addItem', item.add)
app.post('/allItem', item.all)
app.post('/randomItem', item.randomItem)

app.post('/randomIn', item.randomIn)
app.post('/allIn', item.allIn)
app.post('/addIn', item.addIn)
export default app
