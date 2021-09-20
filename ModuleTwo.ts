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


/*  Funciones array  */

export  let nombres: string[]= ['andres', 'luisa','william','sebastian'];
nombres.push('luisa');

export let animales: [string,string,string,string] = ['pitbull','golden','beagle','bulldog'];

export let datos: [string,string,number,string] =['Luisa','Pachon',19,'Bogota'];



/*  Funciones string */

let palabraConcat :string;

export function palabraConcatenar (Name: string, Last: string): string{

    palabraConcat = Name + ' '+ Last; 

    return palabraConcat;
}

    let cont:number =0;
export function leernumeros(palabra: string):string{

    let textnumber = palabra;

    for (let index = 0; index < textnumber.length; index++) {
        if(textnumber[index] == '2' || textnumber[index] == '3'){
            cont++;
        }
    }

    return 'La palabra ingresada tiene '+ cont + ' numeros';
}

export function convertirminuscula(palabra: string):string{

    return palabra.toLowerCase();


}



/* VARIABLES any */

export let Datoanimal:any = '3';
 Datoanimal= parseInt(Datoanimal);

export let Datopaciente:any = false;
Datopaciente = Datopaciente.toString();

export let Datopersonal: any =true;
Datopersonal = Boolean(Datopersonal);



