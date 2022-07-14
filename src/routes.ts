import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { LoginController } from './controllers/LoginController'

const router = Router()

const createUser = new CreateUserController()
const login = new LoginController()

router.get('/', (req, res) => res.render('index'))
router.get('/recuperar-senha', (req, res) => res.render('pass-recovery'))

router.post('/cadastrar', createUser.handle)
router.post('/entrar', login.handle)

export { router }