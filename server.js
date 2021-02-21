const express = require('express')
const path = require('path');
const app = express()
const port = 3000;

app.use(express.static('build'))

app.get('/api/', (req, res) => {
    res.sendFile(__dirname + '/build/');
})

app.get('/api/name', (req, res) => {
    res.json({
        name: 'name'
    })
})

app.get('/api/sonu', (req, res) => {
    res.json({
        name: 'sonu'
    })
})

app.all('/*', (req, res) => {
    res.json({
        message: 'Route not found'
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});