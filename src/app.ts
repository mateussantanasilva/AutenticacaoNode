import express from 'express'
import path from 'path'
import { router } from './routes'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../src/views'))
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 3000, () => { console.log('App is running...')})