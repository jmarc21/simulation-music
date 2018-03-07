require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , massive = require('massive')
    , cors = require('cors')
    , axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());
                            //83C
app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    //75E & 83D
    next()
    //83F
}, function(req,res,next){
    console.log('i hit the next')
})


massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
})

app.post('/api/register-user', (req, res) => {
    const { username, password } = req.body
    const db = app.get('db');
    db.create_user([
        username,
        password
    ]).then(resp => {
        res.status(200).send('User Registered')
    })
})
app.get('/api/me', (req, res, next) => {
    const db = app.get('db');
    //76E
    const id = req.query.id
    db.get_user_info([id]).then(resp => {
        res.status(200).send(resp)
    })

})


const { SERVER_PORT } = process.env
app.listen(SERVER_PORT, () => {
    console.log(`I'm listening on port: ${SERVER_PORT}`)
});