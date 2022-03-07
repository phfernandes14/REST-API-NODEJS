const express = require("express");
const router = express.Router()

//Rotas

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Listar todos os pedidos'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Registrar um pedido'
    })
})

router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido

    res.status(200).send({
        mensagem: 'Consultar um pedido',
        id_pedido: id
    })


})

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Deletar um pedido'
    })
})

module.exports = router