require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const c = require('./controllers/controller')

const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then(db=>{
    app.set('db', db)
    console.log('db is running');
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is all good`))
})

app.post('/api/item', c.addItem)
app.get('/api/items', c.getItems)
app.put('/api/item/:id', c.editItem)
app.delete('/api/item', c.deleteItem)
