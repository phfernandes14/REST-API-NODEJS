const express = require("express");
const router = express.Router()

//Rotas
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Listagem de todos os produtos'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Cadastrar um produto'
    })
})

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    res.status(200).send({
        mensagem: 'Listar um produto',
        id: id
    })
})

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Editar um produto'
    })
})

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Deletar um produto'
    })
})

module.exports = router