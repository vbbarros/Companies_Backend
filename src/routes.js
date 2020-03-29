const router = require('express').Router()

const InvestorController = require('./app/controllers/InvestorController')
const SessionController = require('./app/controllers/SessionController')
const EnterprisesController = require('./app/controllers/EnterprisesController')

const authMiddleware = require('./app/middlewares/auth')

router.post('/users', InvestorController.store) //criar usuario
router.post('/api/v1/users/auth/sign_in', SessionController.signIn)

router.use('/api/v1/enterprises', authMiddleware)
router.get('/api/v1/enterprises/:id', EnterprisesController.findOne)
router.get('/api/v1/enterprises', EnterprisesController.findWithFilter)

module.exports = router