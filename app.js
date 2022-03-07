const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));

//Config JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Config CORS
app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Origin','*'
    );
    res.header(
        'Acess-Control-Allow-Header',
        'Origin, X-Requested-Width, Content-Type, Accept, Authorization'
    );

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).send({});
    };
    next();
});

//Rotas
app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//Tratamento erros de rota;
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 400;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;