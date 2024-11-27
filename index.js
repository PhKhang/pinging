var ping = require('ping');

var hosts = ['https://flow-socials.onrender.com', 'https://flow-express-js.onrender.com', 'https://sequelize-postgres-exercise-22127182.onrender.com/'];
hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(msg);
    });
});