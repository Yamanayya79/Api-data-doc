let express = require('express')
let app = express();
let fs = require('fs')
let port = 5000;

app.get('/', (req, res) => {
    fs.readFile('readme.md', 'utf-8', (err, result) => {
        res.send(result)
})
})

// =1=======location========
app.get('/location', (req, res) => {
    fs.readFile('location.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//==2=======Grocery=========
app.get('/grocery', (req, res) => {
    fs.readFile('Grocery.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//====3====Electronics product=========

app.get('/Electronics', (req, res) => {
    fs.readFile('Electronics.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//===4====Furniture.& more=======
app.get('/Furniture', (req, res) => {
    fs.readFile('Furniture.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})

//=5==Winter EssentialsWinter Essentials======
app.get('/EssentialsWinter', (req, res) => {
    fs.readFile('EssentialsWinter.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
////==6========weddinggifts=============
app.get('/weddinggifts', (req, res) => {
    fs.readFile('weddinggifts.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
////==7=======Sports==============
app.get('/sports', (req, res) => {
    fs.readFile('sports.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//==8======dress========
app.get('/dress', (req, res) => {
    fs.readFile('dress.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//===9=========kitchen============
app.get('/kitchen', (req, res) => {
    fs.readFile('kitchen.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
app.listen(port, () => {
    console.log('server started')
})