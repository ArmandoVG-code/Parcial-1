import  readline from "node:readline";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let NombreEmp;
let prodElab;
let prodDef;

console.log("========== PRODUCCIÓN DIARIA ==========");

r1.question("Ingresa el nombre del empleado: ", (resp1) => {
    NombreEmp = resp1;

    r1.question("Ingresa la cantidad de productos elaborados: ", (resp2) => {
        prodElab = parseFloat(resp2);

        r1.question("Ingresa la cantidad de productos defectuosos: ", (resp3) => {
            prodDef = parseFloat(resp3);

            let prodCorrect = prodElab - prodDef;
            let porcentaje = (prodCorrect / prodElab) * 100;
            let estado;

            if(porcentaje >= 95){
                estado = "Producción aceptada";
            } else {
                estado = "Producción requiere revisión";
            }

            let NombreEmpMayus = NombreEmp.toUpperCase();

            console.log("\n========== RESULTADO ==========");
            console.log("Empleado: " + NombreEmpMayus);
            console.log("Productos correctos: " + prodCorrect);
            console.log("Porcentaje: " + porcentaje.toFixed(2) + "%");
            console.log(estado);
            console.log("=================================");
            r1.close();
        });
    });
});