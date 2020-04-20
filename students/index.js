const app = require('./server')


//Starting Server
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));