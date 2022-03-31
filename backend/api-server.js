const express = require('express')
const app = express()
const port = 3001
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
const database = require('./database')


app.get('/api/memos', async (req, res) => {
    const result = await database.run('SELECT * from memos_table')
    res.send(result)
})

app.post('/api/memos', async (req, res) => {    
    await database.run(`INSERT INTO memos_table (content) VALUES ('${req.body.content}')`)
    const result = await database.run('SELECT * from memos_table')
    res.send(result);
})

app.put('/api/memos/:id', async (req, res) => {
    await database.run(`UPDATE memos_table SET content = '${req.body.content}' WHERE id = ${req.params.id}`)
    const result = await database.run('SELECT * from memos_table')
    res.send(result);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})