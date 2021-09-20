import {sumar,operar,restar,cat,cat2,cat3} from "./ModuleTwo";

console.log(operar(3, 7, (x: number,y: number): number => {
    return x+y;
}))

console.log(sumar(10, 5));
console.log(restar(9,-4));

console.log(cat(true,false));
console.log(cat2(false,true));
console.log(cat3(false,true,true, false));
