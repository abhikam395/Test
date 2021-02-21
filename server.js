const express = require('express')
const path = require('path');
const app = express()
const port = 3000;

app.use(express.static('build'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/a', (req, res) => {
    res.sendFile(__dirname + '/build/');
})

app.all('*', (req, res) => {
    res.json({
        message: 'Route not found'
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});