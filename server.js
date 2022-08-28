const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('<h1>น้องเนสคนสวยและน่ารัก!</h1>')
})

app.get('/nes', (req, res) => {
  return res.send('<h1>สวยและน่ารักที่สุดเลย</h1>')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info('Server is ready at', PORT)
})