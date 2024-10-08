import { Router,Request,Response,RequestHandler} from "express";

const router = Router()

//rota estática
router.get('/',(req: Request,res: Response)=>{
    res.send("Aqui é a página principal")
})

//QUANDO USAMOS MIDDLEWARE, COLOCAMOS NEXT
const interferir:RequestHandler = (req,res,next)=>{
    let logged = false
    if(logged){
        next()
    }else{
        res.status(404).send("Loggin não permitido")
    }
}

//rota estática
router.get('/contato',interferir,(req: Request,res: Response)=>{
    console.log("EXECUTOU A PÁGINA DE CONTATOS")
    res.send("Aqui é a página dois")
})

//rota estática
router.get('/terceira',(req: Request,res: Response)=>{
    res.send("Aqui é a página tres")
})

export default router