const database = require('../models')

class CardController {

    static async getAll(req, res) {
        const { filter } = req.query
        try {
            const cards = await database.Cards.findAll({
                where: {
                    status: filter
                }
            })
            return res.status(200).json(cards)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async createCard(req, res) {
        const newCard = req.body
        try {
            const cards = await database.Cards.create(newCard)
            return res.status(200).json(cards)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async updateCard(req, res) {
        const { status, id, password,unblocked } = req.query
        console.log(unblocked)
        if (password) {
            if (password === 'TrabalheNaSaipos') {
                try {
                    const cards = await database.Cards.update(
                        { status: status, unblocked:unblocked },
                        { where: { id: id } }
                    )
                    return res.status(200).json(cards)
                } catch (error) {
                    return res.status(500).json(error)
                }
            }else{
                return res.status(401)
            }
        }
        try {
            const cards = await database.Cards.update(
                { status: status },
                { where: { id: id } }
            )
            return res.status(200).json(cards)
        } catch (error) {
            return res.status(500).json(error)
        }

    }

    static async unblockCard(req, res) {
        const { password, id } = req.query
        if (password === 'TrabalheNaSaipos') {
            try {
                const cards = await database.Cards.update(
                    { status: 'onDevelopment' },
                    { where: { id: id } }
                )
                return res.status(200).json(cards)
            } catch (error) {
                return res.status(500).json(error)
            }
        } else {
            return res.status(401).send('Senha invalida')
        }
    }
}


module.exports = CardController
