const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//config template engine
app.set('views', './src/views')
app.set('view engine', 'ejs')


app.get('/abc', (req, res) => {
  res.send('Hello Jayden!')
})
app.get('/Jayden', (req, res) => {
  //res.send('<h1>Hello Jayden!</h1>')
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
