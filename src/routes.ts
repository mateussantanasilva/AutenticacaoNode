import { Router } from 'express'
import { ChangePasswordController } from './controllers/ChangePasswordController'
import { CreateUserController } from './controllers/CreateUserController'
import { LoginController } from './controllers/LoginController'

const router = Router()

const createUser = new CreateUserController()
const login = new LoginController()
const changePassword = new ChangePasswordController()

router.get('/', (req, res) => res.render('index', {status: req.query.status}))
router.post('/entrar', login.handle)

router.get('/cadastrar', (req, res) => res.render('register', {status: req.query.status}))
router.post('/cadastrar', createUser.handle)

router.get('/recuperar-senha', (req, res) => res.render('pass-recovery', {status: req.query.status}))
router.post('/recuperar-senha', changePassword.handle)

export { router }