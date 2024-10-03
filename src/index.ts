import validator from 'validator';
import {somar, subtrair} from './matematica'
import filmes from './filmes'




//validando email
console.log(validator.isEmail('fulano@gmail.com'))

//validando ip
let ip = '192.168.0.7'
console.log(validator.isIP(ip))

//somando
console.log(`SOMA:${somar(10,20)}`)
//subtraindo
console.log(`SUBTRAÇÃO:${subtrair(700,10)}`)

//filmes
console.log(filmes)