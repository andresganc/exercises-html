// Importamos express 
var express = require('express');
var app = express();        // Almacenamos express en la constante app
// Importacion de path para manejo de directorios
const path = require('path');

// Configuracion para obtener puerto (Se podra inyectar o cambiar desde cualquier parte)
app.set('port', 3000);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

// Middlewares

// Static files

// Routes
app.get('/', function (req, res) {
    //res.send('Hola mundo');       // send para enviar variable o texto.
    //res.sendFile('./views/index.html');    // sendFile (Para enviar un archivo) da error por la ruta 
    //console.log(__dirname);       // El dirname es don de se almacena la ruta donde estamos
    //console.log(__dirname + '/views/index.html');     // Si se usa dirname + la ruta donde esta el index.html queda erroneo por windows maneja barra invertida 
    //console.log(path.join(__dirname, 'views/index.html'));   // En su caso se usa path para que el solucione las barras (Identifica en que S.O esta y pone las barras que correspondan normales o invertidas)
    res.sendFile( path.join(__dirname, 'views/index.html') );
    //res.render('index');
});

// Escuchando el servidor
app.listen(app.get('port'), function () {
    console.log('==============================================================');
    console.log('========================= SERVIDOR ===========================');
    console.log('==============================================================');
    console.log('Servidor web express iniciado correctamente en el puerto', app.get('port'));
    console.log('Haga Ctrl + click para abrir:  http://localhost:3000');
    console.log('==============================================================');
});