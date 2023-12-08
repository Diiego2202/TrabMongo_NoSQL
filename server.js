const { MongoClient } = require ('mongodb');
const bodyParser = require('body-parser');
var express = require('express')
var app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')

const uri = "mongodb+srv://diiego2202:diiego2202@cluster0.zyowpag.mongodb.net/";

let client = new MongoClient(uri);

var db;

app.get("/", async (req, res) => {
    const ret = await db.collection('cliente').find().toArray();
    res.render('index', { clientes: ret })
})

const start = async () => {
    await client.connect();
    db = client.db("test");
    app.listen(8000, () => {
        console.log('Servidor iniciado porta 8000')
    });
}

start();