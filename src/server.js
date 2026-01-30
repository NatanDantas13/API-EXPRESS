import express from 'express'
import routes from './routes/router.js'

const PORT = 3000
const app = express()

// MIDDLAWARE
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Port ${PORT} na escuta`)
})

