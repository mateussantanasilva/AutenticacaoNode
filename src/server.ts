import express from 'express'
import path from 'path'
import { router } from './routes'

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)

app.listen(3000, () => { console.log('App is running...')})