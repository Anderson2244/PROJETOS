import {Router,Request,Response} from 'express'
import * as HomeController from '../controllers/homecontroller'
import * as infoController from '../controllers/infocontroller'
import * as usercontroller from '../controllers/userController'

const router = Router()

//ROTA HOME
router.get('/',HomeController.home)
//ROTA CONTATO
router.get('/contato',infoController.contato)
//ROTA SOBRE
router.get('/sobre',infoController.sobre)
//ROTA NOME
router.get('/nome',usercontroller.nome)
//ROTA IDADE
router.get('/idade',usercontroller.idade)
//ROTA IDADE RESULTADO
//POST processa as informações
router.post('/idaderesultado',usercontroller.idaderesultado)

export default router
