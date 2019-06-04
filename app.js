const app = require('./config/server.js');

const homeRoute = require('./app/routes/home.js');
homeRoute(app);

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000');
});