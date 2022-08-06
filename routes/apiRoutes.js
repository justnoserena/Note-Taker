const router = require('express').Router();
const fs = require('fs');


router.get('/api/notes', (req, res) =>{
    fs.readFile('db/db.json', 'utf-8', (err,data) => {
        console.log(data)
        if (err) throw err;
        res.json(JSON.parse(data));
    })
})

router.post('/api/notes', (req,res) => {
    fs.readFile('db/db.json', (err,data) => {
        if (err) throw err;
        let json = JSON.parse(data)
        let newNote = {title: req.body.title, text: req.body.text}

        json.push(newNote)
        fs.writeFile('db/db.json', JSON.stringify(json), err => {
            if (err) throw err;
            res.redirect('/notes')
        })
    })
})

module.exports = router;