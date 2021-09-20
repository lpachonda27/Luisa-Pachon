/*  Funciones Number  */

export function operar(valor1: number, valor2: number, func: (x: number, y:number)=>number): number {
    return func(valor1, valor2);    
}

export function sumar(valor1:number, valor2:number): number {
    return valor1+valor2;
}
export function restar(valor1:number, valor2:number): number {
    return valor1-valor2;
}  


/* Funciones Boolean */
export function cat(valor1:boolean, valor2:boolean): boolean {
    return valor1 && valor2;
}

export function cat2(valor1:boolean, valor2:boolean): boolean {
    return valor1 || valor2;
}

export function cat3(valor1:boolean, valor2:boolean, valor3:boolean, valor4:boolean): boolean {
    return valor1 && valor2 || valor3 && valor4;
}