import {sumar,operar,restar,cat,cat2,cat3,nombres,animales,datos, convertirminuscula, leernumeros, palabraConcatenar, Datopersonal, Datopaciente, Datoanimal} from "./ModuleTwo";

console.log(operar(3, 7, (x: number,y: number): number => {
    return x+y;
}))

console.log(sumar(10, 5));
console.log(restar(9,-4));

console.log(cat(true,false));
console.log(cat2(false,true));
console.log(cat3(false,true,true, false));


console.log(nombres);
console.log(animales);
console.log('Nombres: ' + datos[0]+ ' '+datos[1]+"\nedad: "+datos[2]+ "\nCiudad: "+ datos[3]);



console.log(palabraConcatenar('name','last'));
console.log(convertirminuscula('LUISAPACHON'));
console.log(leernumeros('1234567676'));


console.log(Datoanimal);
console.log(Datopaciente);
console.log(Datopersonal);