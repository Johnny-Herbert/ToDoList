module.exports = (app) => {
    const db = require('../../config/db');
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/itens', (req, res) => {
        db.ref('/list').once('value').then((snapshot) => {
          res.send(snapshot.val());
        });
    });

    app.post('/list', (req, res) => {
        db.ref('/list').push(req.body);
        res.redirect('/');
    });
}